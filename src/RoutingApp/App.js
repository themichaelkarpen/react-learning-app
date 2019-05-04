import React, { useState, useEffect } from "react";
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  const [selectedNavItem, setSelectedNavItem] = useState(null)

  useEffect(() => {
    // nothing yet
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
