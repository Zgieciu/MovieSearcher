import React, { useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';

import MoviesList from './components/MoviesList';
import Searcher from './components/Searcher';
import Sorter from './components/Sorter';

import './styles/App.css';

const App = () => {

  const moviesURLs = {
    popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-Pl&page=1',
    upcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-PL&page=1',
  }

  const [movies, setMovies] = useState([]);
  const [currentMoviesSection, setCurrentMoviesSection] = useState(moviesURLs.popularMovies)

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', currentMoviesSection, true);

    xhr.onload = () => {
      if(xhr.status === 200) {
        const moviesFromAPI = JSON.parse(xhr.response)
        setMovies(moviesFromAPI.results)
      }
    }

    xhr.send();
  }, [])

  return ( 
      <div className="app">
        <h1>Movie Searcher</h1>
        <Searcher/>
        <Sorter/>
        <MovieContext.Provider value={movies}>
          <MoviesList/>
        </MovieContext.Provider>
      </div>
   );
}
 
export default App;