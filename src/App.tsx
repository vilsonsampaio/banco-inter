import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';

import theme from './styles/theme';
import GlobalStyles from './styles/global';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
