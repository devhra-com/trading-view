import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../auth/contexts/AuthProvider';

// type PrivateRouteProps = {
//   roles?: string[];
//   children: React.ReactNode;
// } & RouteProps;

function PrivateRoute(props: any) {
  const { roles, children } = props;
  const { hasRole, userInfo } = useAuth();

  if (userInfo) {
    if (!hasRole(roles)) {
      return <Navigate to={`${process.env.PUBLIC_URL}/403`} />;
    }
    return children;
  }
  return <Navigate to={`${process.env.PUBLIC_URL}/login`} />;
}

export default PrivateRoute;
