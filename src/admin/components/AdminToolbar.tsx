import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSettings } from '../../core/contexts/SettingsProvider';

type AdminToolbarProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
};

function AdminToolbar({ children, title, subtitle }: AdminToolbarProps) {
  const { toggleDrawer } = useSettings();

  return (
    <Toolbar sx={{ px: { xs: 3, sm: 6 } }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{
          display: { lg: 'none' },
          marginRight: 2,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        {title}
        <Typography variant="h6" component="h1">
          {subtitle}
        </Typography>
      </Typography>
      {children}
    </Toolbar>
  );
}

export default AdminToolbar;
