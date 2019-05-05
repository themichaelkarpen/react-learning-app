import React, { useState, useEffect } from "react";
//import { withRouter } from 'react-router-dom';

const Home = (props) => { // note: props is needed for history push

  useEffect(() => {
    // redirect on component load - will never be able to access home
    // props.history.push('/about')
  }, []);

  const sampleRedirect = () => {
    props.history.push('/about')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>{
          sampleRedirect()}}> go home redirect via history push
      </button>
    </div>
  );
}

export default Home