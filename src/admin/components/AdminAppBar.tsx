import React from 'react';
import AppBar from '@mui/material/AppBar';
import { drawerCollapsedWidth, drawerWidth } from '../../core/config/layout';
import { useSettings } from '../../core/contexts/SettingsProvider';

type AdminAppBarProps = {
  children: React.ReactNode;
};

function AdminAppBar({ children }: AdminAppBarProps) {
  const { collapsed } = useSettings();
  const width = collapsed ? drawerCollapsedWidth : drawerWidth;

  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${width}px)` },
        marginLeft: { lg: width },
      }}
    >
      {children}
    </AppBar>
  );
}

export default AdminAppBar;
