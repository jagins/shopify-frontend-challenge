import React from 'react';
import MenuBar from './components/MenuBar';
import MovieList from './components/MovieList';
import NominationList from './components/NominationList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <NominationList/>
      <MovieList/>
    </div>
  );
}

export default App;
