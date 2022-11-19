import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import createTheme from '../theme';

interface SettingsContextInterface {
  collapsed: boolean;
  direction: string;
  mode: string;
  open: boolean;
  changeCollapsed: (collapsed: boolean) => void;
  changeDirection: (direction: 'ltr' | 'rtl') => void;
  changeMode: (mode: string) => void;
  toggleDrawer: () => void;
}

export const SettingsContext = createContext({} as SettingsContextInterface);

type SettingsProviderProps = {
  children: React.ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [collapsed, setCollapsed] = useLocalStorage('sidebarcollapsed', false);
  const [direction, setDirection] = useLocalStorage('direction', 'ltr');
  const [mode, setMode] = useLocalStorage('mode', 'light');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  const theme = useMemo(
    () => createTheme(direction as 'ltr' | 'rtl', mode as 'dark' | 'light'),
    [direction, mode],
  );

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const changeCollapsed = (collapsed: boolean) => {
    if (typeof collapsed === 'boolean') {
      setCollapsed(collapsed);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const changeDirection = (direction: 'ltr' | 'rtl') => {
    if (direction) {
      setDirection(direction);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const changeMode = (mode: string) => {
    if (mode) {
      setMode(mode);
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        collapsed,
        direction,
        mode,
        open,
        changeCollapsed,
        changeDirection,
        changeMode,
        toggleDrawer,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns as any}>
          <CssBaseline />
          {children}
        </LocalizationProvider>
      </MuiThemeProvider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

export default SettingsProvider;