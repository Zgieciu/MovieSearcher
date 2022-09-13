import React from 'react';

const Movie = props => {

    const posterBaseUrl = 'https://image.tmdb.org/t/p/w200/';
    const poster = posterBaseUrl + props.poster;

    return ( 
        <div className="movie">
            <h2>{props.title}</h2>
            <img src={poster} alt="poster" />
            <h3>Ocena: {props.rating}/10</h3>
            <h3>Data premiery: {props.date}</h3>
            <p>{props.overview}</p>

        </div>
     );
}
 
export default Movie;