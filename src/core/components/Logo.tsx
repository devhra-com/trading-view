import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;

function Logo({ size = 100, ...boxProps }: LogoProps) {
  return (
    <Box {...boxProps}>
      <LogoSvg height={size} width={size} />
    </Box>
  );
}

export default Logo;