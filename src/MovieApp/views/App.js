import React, { useState, useEffect } from "react";
import '../css/App.css';
import Header from '../components/Header';
import Search from '../components/Search';
import Movie from '../components/Movie';

const MOVIE_API_KEY = "46d3128b";
const MOVIE_DEFAULT_SEARCH = "300";
const MOVIE_API_URL = "https://www.omdbapi.com/";
const MOVIE_DEFAULT_API_SEARCH = `${MOVIE_API_URL}?s=${MOVIE_DEFAULT_SEARCH}&apikey=${MOVIE_API_KEY}`;


const App = () => {

  // Notice each state item has it's own useState? this means you can't combine these to be set into state at once.
  // To do this, we'll need to use the useReducer functionality (similar to Redux)
  // see AppWithReducer.js
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  // useEffect:
  // gets called after first render (componentDidMount)
  // the array at the end of it is for what do the component updates (componentDidUpdate)
  // In that array we just pass in a value that tells React to skip applying an effect if the value passed in hasn’t changed.
  useEffect(() => {
    fetch(MOVIE_DEFAULT_API_SEARCH)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  /*
    // for class components
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        document.title = `You clicked ${this.state.count} times`;
      }
    }
    // using hooks it will become
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes
  */
  
  // fn passed as prop to Search component
  const search = searchValue => {
    setLoading(true)
    fetch(`${MOVIE_API_URL}?s=${searchValue}&apikey=${MOVIE_API_KEY}`)
      .then(response => response.json())
      .then(jsonResponse => { 
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search)
          setErrorMessage(null)
        } 
        else {
          setErrorMessage(jsonResponse.Error)
        }
        setLoading(false)
      })
  }

  return (
    <div className="App">
      <Header text="Movie Search Demo" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <div className="movies">
        { 
          loading && !errorMessage ? (
            <span>loading ...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : 
          (
            movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))
          )
        }
      </div>
    </div>
  );
}

export default App;
