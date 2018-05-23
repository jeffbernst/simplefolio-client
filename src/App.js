import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import { LandingPage } from './components/landing-page'

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={LandingPage}/>
      </div>
    )
  }
}

export default App
