import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import router from '@/router';
import theme from '@styles/theme.js';
import GlobalStyle from '@styles/GlobalStyle.js';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
