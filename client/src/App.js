import React from 'react';
import MenuBar from './components/MenuBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <MovieList/>
    </div>
  );
}

export default App;
