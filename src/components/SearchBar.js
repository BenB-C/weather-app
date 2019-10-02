import React from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from './../actions';
import searchIcon from './../assets/images/magnifying_glass.png';
import './SearchBar.css';

function SearchBar({ dispatch }) {
  let input;
  return (
    <div className='SearchBar'>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchLocation(input.value.trim()));
        input.value = '';
      }}>
        <button><img src={searchIcon} alt='magnifying glass' /></button>
        <input placeholder='Show me the weather in... city, zip, or place' ref={node => {
          input = node;
        }}></input>
      </form>
    </div>
  );
}

export default connect()(SearchBar);
