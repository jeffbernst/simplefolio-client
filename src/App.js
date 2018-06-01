import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { withRouter } from 'react-router-dom'
import { LandingPage } from './components/landing-page'
import { PortfolioPage } from './components/portfolio-page'
import { LoginPage } from './components/login-page'
import SignUp from './components/sign-up-page'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const rootComponent = this.props.loggedIn ? PortfolioPage : LandingPage

    return (
      <div>
        <Route exact path='/' component={rootComponent}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={LoginPage}/>
      </div>
    )
  }
}

// export default App
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App))