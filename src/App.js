import React, { Component } from 'react'
import './App.css'

import { LandingPage } from './components/landing-page'
import { Login } from './components/login'
import {SignUp} from './components/sign-up'

class App extends Component {
  render () {
    return (
      <div>
        <SignUp />
      </div>
    )
  }
}

export default App
