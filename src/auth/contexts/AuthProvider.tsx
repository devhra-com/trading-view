import React, { createContext, useContext } from 'react';
import useLocalStorage from '../../core/hooks/useLocalStorage';
import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';
import useUserInfo from '../hooks/useUserInfo';
import { UserInfo } from '../types/userInfo';

interface AuthContextInterface {
  hasRole: (roles?: string[]) => {};
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  userInfo?: UserInfo;
}

export const AuthContext = createContext({} as AuthContextInterface);

type AuthProviderProps = {
  children?: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [authKey, setAuthKey] = useLocalStorage<string>('authkey', '');

  const { isLoggingIn, login } = useLogin();
  const { isLoggingOut, logout } = useLogout();
  const { data: userInfo } = useUserInfo(authKey);

  const hasRole = (roles?: string[]) => {
    if (!roles || roles.length === 0) {
      return true;
    }
    if (!userInfo) {
      return false;
    }
    return roles.includes(userInfo.role);
  };

  const handleLogin = async (email: string, password: string) =>
    login({ email, password })
      .then((key: string) => {
        setAuthKey(key);
        return key;
      })
      .catch((err: any) => {
        throw err;
      });

  const handleLogout = async () =>
    logout()
      .then((data: any) => {
        setAuthKey('');
        return data;
      })
      .catch((err: any) => {
        throw err;
      });

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        hasRole,
        isLoggingIn,
        isLoggingOut,
        login: handleLogin,
        logout: handleLogout,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
