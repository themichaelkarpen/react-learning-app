import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../AppContext';

const About = () => {

  const {state, dispatch} = useContext(AppContext)

  useEffect(()=>{
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'about'
    })
  }, [])

  return (
    <div>
      <h1>About Page</h1>
      Selected Page (in View): {state.selectedPage}
    </div>
  )
}

export default About