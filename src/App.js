import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './searchIcon.svg';
import MovieCard from './movieCard';

const App = () => {
  return (
    <div className="app">
      <h1>Cineplex</h1>

      <div className="search">
        <input placeholder="search for movies"/>
        <img src={searchIcon} alt="search" />
      </div>

      <div className="container">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  );
}

export default App;
