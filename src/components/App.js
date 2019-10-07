import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import Location from './Location';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Location />
      <Weather />
    </div>
  );
}

export default App;
