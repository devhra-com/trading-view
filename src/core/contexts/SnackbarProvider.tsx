import React, { createContext, useContext, useState } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle, Snackbar, Color } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SnackbarContextInterface {
  error: (newMessage: string) => void;
  success: (newMessage: string) => void;
}

export const SnackbarContext = createContext({} as SnackbarContextInterface);

type SnackbarProviderProps = {
  children: React.ReactNode;
};

function SnackbarProvider({ children }: SnackbarProviderProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState<Color | undefined | string>(
    undefined,
  );

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const error = (newMessage: string) => {
    setTitle(t('common.snackbar.error'));
    setMessage(newMessage);
    setSeverity('error');
    setOpen(true);
  };

  const success = (newMessage: string) => {
    setTitle(t('common.snackbar.success'));
    setMessage(newMessage);
    setSeverity('success');
    setOpen(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SnackbarContext.Provider value={{ error, success }}>
      {children}
      <Snackbar
        key={message}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity === 'success' ? 'success' : 'error'}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export default SnackbarProvider;
