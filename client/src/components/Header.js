import React, {useState, useRef, useEffect} from 'react'
import searchIcon from "../search-icon.svg"
import Cards from './Cards'

export default function Header(props) {
  const api_key = props.api_key;
  const poster_w185 = props.poster_w185;
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showPopular, setPopular] = useState(true);
    
    useEffect(() => {
        inputRef.current.focus();
      });

    const searchMovies = async (e) => {
        e.preventDefault();
        const pages = 7;
        try {
            const all_data = []
            for (let i = 1; i <= pages; i++) {
              const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${i}&include_adult=false`;
              const res = await fetch(url);
              const data  = await res.json();
              Array.prototype.push.apply(all_data, data.results);
            }
            setMovies(all_data);
            console.log(all_data);
            setPopular(false);
        }catch(err){
            console.error(err);
        }
    }
    
  return (
    <React.Fragment>
      <header className={ showPopular ? "navbar navbar__end" : "navbar" }  >
      { !showPopular ? <button className="popular__btn" onClick={() => setPopular(true)}>Popular</button> : null }
        <form className="search__form" onSubmit={searchMovies}>
            <input className="search__input" type="text" name="query"
                    placeholder="Search" ref={inputRef}
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
            <button className="search__button" type="submit"> <img src={searchIcon} alt="search-icon"></img> </button>
        </form>
      </header>
      
      <Cards movies={movies} poster_w185={poster_w185} api_key={api_key} showPopular={showPopular} />
      </React.Fragment>
  )
}
