import React, { useEffect, useContext, useReducer } from "react";
import './css/App.scss';
//import './css/font-awesome/css/font-awesome.min.css';

import useDarkMode from './hooks//use-dark-mode';
import Toggle from './components/Toggle';

import Header from './components/Header';
import Main from './components/Main';

import AppContext from './AppContext';
import appReducer from './reducers/reducer';

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    // nothing yet
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{state, dispatch}}>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header />
        <Main/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
