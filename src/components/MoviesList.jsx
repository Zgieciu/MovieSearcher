import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

import Movie from './Movie.jsx';

const MoviesList = () => {
    const movies = useContext(MovieContext);

    return ( 
        <div className="movies-list">
            {movies.map(movie => 
                <Movie
                    key = {movie.id}
                    title = {movie.title}
                    overview = {movie.overview}
                    rating = {movie.vote_average}
                    date = {movie.release_date}
                    poster = {movie.poster_path}
                />)}       
        </div>
     );
}
 
export default MoviesList;