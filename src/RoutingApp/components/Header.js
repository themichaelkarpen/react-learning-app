import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate between routes.
const Header = () => { 
  
  const {state, dispatch} = useContext(AppContext)

  useEffect(()=>{
    
  }, [])

  return (
    <header>
      <nav>
        <div>Routing App with React Hooks and Context (not redux) for Global State</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        Selected Page (in Header): {state.selectedPage}
      </nav>
    </header>
  )

}

export default Header