import React from 'react';
import { ThemeProvider } from 'styled-components/';
import { Switch, Route } from 'react-router-dom';

import LoadingPage from './components/LoadingPage';

import StyleGuide from './themes/StyleGuide';

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import { DarkThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <DarkThemeProvider>
      <ThemeProvider theme={StyleGuide}>
        <LoadingPage />
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </ThemeProvider>
    </DarkThemeProvider>
  );
}

export default App;
