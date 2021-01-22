import React from 'react'
import Popular from './Popular'

export default function Cards(props) {
    const api_key = props.api_key;
    const movies = props.movies;
    const poster_w185 = props.poster_w185;
    const showPopular = props.showPopular;
    console.log(showPopular);
    return (
        <React.Fragment>
        { !showPopular ? 
            
       <div className="cards__wrapper">
            <h1 className="main_title">Search Result</h1>
            <div className="cards">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card__image"
                        src={`${poster_w185}${movie.poster_path}`}
                        alt="poster"/>
                        
                    <div className="card__title">
                        <h2>{movie.original_title}</h2>
                    </div>
                </div>
            ))}
            </div> 
       </div>
        : null }   
            { showPopular ? <Popular api_key={api_key} poster_w185={poster_w185}/> : null }
            
        </React.Fragment>
    )
}
