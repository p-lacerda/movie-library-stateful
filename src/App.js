import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import data from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
