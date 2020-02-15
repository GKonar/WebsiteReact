import React from 'react';
import { ThemeProvider } from 'styled-components/';
import { Switch, Route } from 'react-router-dom';

import { StyleGuide } from './components';

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={StyleGuide}>
      <Switch>
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
