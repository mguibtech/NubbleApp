import React, {Children} from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../Hooks/useAppSafeArea';

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
}
