import React from 'react'
import { Link } from 'react-router-dom'
import './user-nav.css'
import { clearAuth } from '../actions/auth'
import { clearAuthToken } from '../local-storage'

export class UserNav extends React.Component {
  logOut () {
    this.state.dispatch(clearAuth())
    clearAuthToken()
  }

  render () {
    return (
      <nav className='user-nav container'>
        <Link to={'/'}>
          <div className="site-logo fade-in-out">Simplefol.io</div>
        </Link>
        <div className="nav-buttons">
          <button className="logout fade-in-out" onClick={() => this.logOut()}>Logout</button>
        </div>
      </nav>
    )
  }
}