import React, { useState } from "react";
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  }
  const resetInputField = () => {
    setSearchValue("")
  }
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue); // pass value to parent through Props
    resetInputField();
  }

  return (
    <form className="search">
      {/* 
      <TextField
        id="outlined-name"
        label="Search"
        value={searchValue}
        onChange={handleSearchInputChanges}
        margin="none" 
        variant="outlined" type="text"
      />
      <Button variant="outlined" color="primary" onClick={callSearchFunction}>
        Search
      </Button>
      */}
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      
    </form>
  );
}
export default Search;