import React from 'react';
import searchIcon from './../assets/images/magnifying_glass.png';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <img src={searchIcon} alt='magnifying glass' />
      <form>
        <input type='text' />
      </form>
    </div>
  );
}

export default SearchBar;
