import React, {useState, useRef, useEffect} from 'react'

export default function Search(props) {
    const api_key = props.api_key;
    const inputRef = useRef();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const poster_w185 = "https://image.tmdb.org/t/p/w185/"
    //const poster_w500 = "https://image.tmdb.org/t/p/w500/"
    
    useEffect(() => {
        inputRef.current.focus();
      });

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data)
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <React.Fragment>
            <form className="form" onSubmit={searchMovies}>
                <input className="input" type="text" name="query"
                    placeholder="Movie Name" ref={inputRef}
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
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
