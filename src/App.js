import React, { Component } from 'react'
import './App.css'

import { LandingPage } from './components/landing-page'
import { Login } from './components/login'

class App extends Component {
  render () {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App
