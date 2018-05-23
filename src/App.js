import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import {LandingPage} from './components/landing-page'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
