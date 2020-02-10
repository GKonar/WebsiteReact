import React from 'react';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from 'styled-components/';
import { StyleGuide } from './components';

function App() {
  return (
    <ThemeProvider theme={StyleGuide}>
      <div className="App">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
