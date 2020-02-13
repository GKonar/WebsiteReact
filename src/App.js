import React from 'react';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from 'styled-components/';
import { StyleGuide } from './components';

function App() {
  return (
    <ThemeProvider theme={StyleGuide}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
