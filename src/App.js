import React, { useEffect, useState } from 'react';
import { MovieContext } from './MovieContext';

import Button from './components/Button';
import MoviesSeriesList from './components/MoviesList';
import Searcher from './components/Searcher';

import './styles/App.css';

const App = () => {

  const URLs = {
    popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-Pl&page=1',
    popularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-PL&page=1',
  }

  const [movies, setMovies] = useState([]);
  const [currentURL, setCurrentURL] = useState(URLs.popularMovies);
  const [placeholder, setPlaceholder] = useState('Wyszukaj Filmu');
  const [title, setTitle] = useState('Wyszukiwarka Filmów');
  const [movieOrSeries, setMovieOrSeries] = useState(true);
  const [search, setSearch] = useState('');

  const changeToPopularMovies = () => {
    setCurrentURL(URLs.popularMovies);
    setPlaceholder('Wyszukaj Film');
    setTitle('Wyszukiwarka Filmów');
    setMovieOrSeries(true);
    setSearch('');
  }

  const changeToPopularSeries = () => {
    setCurrentURL(URLs.popularSeries);
    setPlaceholder('Wyszukaj Serial');
    setTitle('Wyszukiwarka Seriali');
    setMovieOrSeries(false)
    setSearch('');
  }

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', currentURL, true);

    xhr.onload = () => {
      if(xhr.status === 200) {
        const moviesFromAPI = JSON.parse(xhr.response)
        setMovies(moviesFromAPI.results)
      }
    }

    xhr.send();
  }, [currentURL])

  useEffect(() => {
    if(movieOrSeries) 
    {
      const moviesSearcher = `https://api.themoviedb.org/3/search/movie?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-PL&query=${search}&page=1&include_adult=false`;
      setCurrentURL(moviesSearcher);
    }
    else if(!movieOrSeries)
    {
      const seriesSearcher = `https://api.themoviedb.org/3/search/tv?api_key=5b3c541d57b13cc1ca98f28b9c3e0432&language=pl-PL&page=1&query=${search}&include_adult=false`;
      setCurrentURL(seriesSearcher);
    }
    if (search === '') {
      if(movieOrSeries) {
        setCurrentURL(URLs.popularMovies);
      }
      else if(!movieOrSeries) {
        setCurrentURL(URLs.popularSeries)
      }
    }
    
  }, [search])

  return ( 
      <div className="app">
        <h1>{title}</h1>
        <div className="buttons">
          <Button value='Popularne filmy' clickFunction={changeToPopularMovies}/>
          <Button value='Popularne seriale' clickFunction={changeToPopularSeries}/>
        </div>
        <Searcher 
          placeholder={placeholder} 
          search={search} 
          setSearch={setSearch}
        />
        <MovieContext.Provider value={movies}>
          <MoviesSeriesList/>
        </MovieContext.Provider>
      </div>
   );
}
 
export default App;