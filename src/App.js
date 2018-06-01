import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { withRouter } from 'react-router-dom'
import { LandingPage } from './components/landing-page'
import { ConnectedPortfolioPage } from './components/portfolio-page'
import ConnectedLoginPage from './components/login-page'
import ConnectedSignUpPage from './components/sign-up-page'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const rootComponent = this.props.loggedIn ? ConnectedPortfolioPage : LandingPage

    return (
      <div>
        <Route exact path='/' component={rootComponent}/>
        <Route exact path='/signup' component={ConnectedSignUpPage}/>
        <Route exact path='/login' component={ConnectedLoginPage}/>
      </div>
    )
  }
}

// export default App
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App))