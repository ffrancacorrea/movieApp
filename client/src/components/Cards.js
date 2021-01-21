import React from 'react'

export default function Cards(props) {
    const movies = props.movies;
    const poster_w185 = props.poster_w185;
    return (
        <React.Fragment>
            <div className="cards">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card__image"
                            src={`${poster_w185}${movie.poster_path}`}
                            alt="poster"/>
                            
                        <div className="card__description">
                            <h2>{movie.original_title}</h2>
                        </div>
                    </div>
                ))}
            </div>    
        </React.Fragment>
    )
}
