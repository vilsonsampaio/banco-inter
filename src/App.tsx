import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Gradient from './components/Gradient';

import theme from './styles/theme';
import GlobalStyles from './styles/global';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header /> 
      <Gradient />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
