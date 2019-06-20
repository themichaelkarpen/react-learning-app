import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../AppContext';
//import { withRouter } from 'react-router-dom';

const Home = (props) => { // note: props is needed for history push

  const {state, dispatch} = useContext(AppContext)

  useEffect(() => {

    // calls on load, any state item in brackets will cause to run on changes (componentDidUpdate)
    updateGlobalElements(updateGlobalElementsComplete) // all 'master page' variables for App
    
  }, []);

  const updateGlobalElements = (callback=null) => {
    // update all 'master page' variables for App
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'home'
    })

    if (callback) {
      callback()
    }
  }

  const updateGlobalElementsComplete = () => {
    setTimeout(function() {
      console.log('global updates completed', state)
    }, 2000)
  }

  const sampleRedirect = () => {
    props.history.push('/about')
  }

  return (
    <div>
      <h1><i className="fa fa-home"></i> Home Page</h1>
      Selected Page (in View): {state.selectedPage}<br /><br />
      <button onClick={()=>{
          sampleRedirect()}}> go home redirect via history push
      </button>
    </div>
  );
}

export default Home