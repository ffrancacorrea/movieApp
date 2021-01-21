import React from 'react'

export default function Cards(props) {
    const movies = props.movies;
    const poster_w185 = "https://image.tmdb.org/t/p/w185/"
    //const poster_w500 = "https://image.tmdb.org/t/p/w500/"
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
