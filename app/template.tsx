'use client';
import ThemeProvider from '@/infra/ThemeProvider';
import React, { PropsWithChildren } from 'react';

const template: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default template;