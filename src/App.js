import React from 'react'

import Home from './pages/Home'
import Katalog from './pages/Katalog';
import Kontakt from './pages/Kontakt';
import Korpa from './pages/Korpa';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/katalog' component={Katalog} />
          <Route path='/kontakt' component={Kontakt} />
          <Route path='/korpa' component={Korpa} />
        </Switch>
      </Router>
    </>
  );
}

export default App
