import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { ReactComponent as WorldSvg } from '../assets/world.svg';

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;

function Logo({ size = 100, ...boxProps }: LogoProps) {
  return (
    <Box {...boxProps}>
      <WorldSvg height={size} width={size} />
    </Box>
  );
}

export default Logo;
