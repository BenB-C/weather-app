import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocations } from './../actions';
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
        dispatch(fetchLocations(input.value.trim()));
        input.value = '';
      }}>
        <button style={{ cursor: 'pointer' }}><img src={searchIcon} alt='magnifying glass' /></button>
        <input
          placeholder='Show me the weather in... city, zip, or place'
          ref={node => {input = node;}}></input>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(SearchBar);
