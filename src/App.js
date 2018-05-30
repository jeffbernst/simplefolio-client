import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import { LandingPage } from './components/landing-page'
import { Login } from './components/login'
import SignUp from './components/sign-up'

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
      </div>
    )
  }
}

export default App
