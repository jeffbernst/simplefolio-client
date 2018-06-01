import React from 'react'
import { Link } from 'react-router-dom'
import './user-nav.css'

export function UserNav () {
  return (
    <nav>
      <Link to={'/'}>
        <div className="site-logo fade-in-out">Simplefol.io</div>
      </Link>
      <div className="nav-buttons">
        <Link to={'/login'}>
          <button className="login fade-in-out">Login</button>
        </Link>
        <Link to={'/signup'}>
          <button className="signup fade-in-out">Sign Up</button>
        </Link>
      </div>
    </nav>
  )
}