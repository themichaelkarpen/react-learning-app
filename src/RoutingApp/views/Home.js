import React, {useState, useContext, useEffect} from 'react';
import AppContext from '../AppContext';
//import { withRouter } from 'react-router-dom';

const Home = (props) => { // note: props is needed for history push

  const {state, dispatch} = useContext(AppContext)

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'home'
    })
  }, []);

  const sampleRedirect = () => {
    props.history.push('/about')
  }
  return (
    <div>
      <h1>Home Page</h1>
      Selected Page (in View): {state.selectedPage}<br /><br />
      <button onClick={()=>{
          sampleRedirect()}}> go home redirect via history push
      </button>
    </div>
  );
}

export default Home