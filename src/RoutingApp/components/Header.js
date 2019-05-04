import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate between routes.
const Header = () => (
  <header>
    <nav>
      <div>Routing App with Template Components</div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header