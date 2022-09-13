import React, { useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';

import Button from './components/Button';
import MoviesList from './components/MoviesList';
import Searcher from './components/Searcher';

import './styles/App.css';

const App = () => {

  const URLs = {
    popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-Pl&page=1',
    popularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-PL&page=1',
  }

  const [movies, setMovies] = useState([]);
  const [currentMoviesURL, setCurrentMoviesURL] = useState(URLs.popularMovies);
  const [placeholder, setPlaceholder] = useState('Wyszukaj Filmu');
  const [title, setTitle] = useState('Wyszukiwarka Filmów');

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', currentMoviesURL, true);

    xhr.onload = () => {
      if(xhr.status === 200) {
        const moviesFromAPI = JSON.parse(xhr.response)
        setMovies(moviesFromAPI.results)
      }
    }

    xhr.send();
  }, [currentMoviesURL])

  const changeToPopularMovies = () => {
    setCurrentMoviesURL(URLs.popularMovies);
    setPlaceholder('Wyszukaj Film');
    setTitle('Wyszukiwarka Filmów');
  }

  const changeToPopularSeries = () => {
    setCurrentMoviesURL(URLs.popularSeries);
    setPlaceholder('Wyszukaj Serial');
    setTitle('Wyszukiwarka Seriali');
  }

  return ( 
      <div className="app">
        <h1>{title}</h1>
        <div className="buttons">
          <Button value='Popularne filmy' clickFunction={changeToPopularMovies}/>
          <Button value='Popularne seriale' clickFunction={changeToPopularSeries}/>
        </div>
        <Searcher placeholder={placeholder}/>
        <MovieContext.Provider value={movies}>
          <MoviesList/>
        </MovieContext.Provider>
      </div>
   );
}
 
export default App;