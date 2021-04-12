import React from 'react';
import CreateGlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import AppProvider from './contexts';
import defaultTheme from './styles/theme';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <CreateGlobalStyle />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  </Router>
);

export default App;
