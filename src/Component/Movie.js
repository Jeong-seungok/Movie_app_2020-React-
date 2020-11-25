import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Movie.css'

function Movie({id,title,year,summary,poster,genres}){
    
    return(
        <div className="movie">
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    year,
                    summary:summary,
                    poster,
                    genres
                }
            }}>
                <img src={poster} alt={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_summary">{summary.split('').splice(0,140).join('')}...</p>
                    <ul className="movie_genres">
                        {genres.map((genre,idx)=>{
                                return(
                                <li
                                key={idx}
                                className="movie_genre">{genre}</li>
                                );
                        })}
                    </ul>
                </div>
                </Link>
            </div>
    )
}

export default Movie;