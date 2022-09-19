import React from 'react';

import '../styles/Movie.css';

const Movie = props => {

    const posterBaseUrl = 'https://image.tmdb.org/t/p/w200/';
    const poster = posterBaseUrl + props.poster;

    return ( 
        <div className="movie">
            {props.poster ? <img src={poster} alt="poster" /> : null}
            {props.title ? <h2>{props.title}</h2> : null}
            {props.titleSeries ? <h2>{props.titleSeries}</h2> : null}
            {props.rating ? <h3>Ocena: {props.rating}/10</h3> : null}
            {props.date ? <h3>Data premiery: {props.date}</h3> : null}
            {props.overview ? <p>{props.overview}</p> : null} 
        </div>
     );
}
 
export default Movie;