import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  const location = {
    city: 'Portland',
    state: 'OR',
    zip: 97205
  }
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
