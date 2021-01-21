import React, {useState, useRef, useEffect} from 'react'
import searchIcon from "../search-icon.svg"
import Cards from './Cards'

export default function Header(props) {
  const api_key = props.api_key;
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
    
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
      <header className="navbar">
        <form className="search__form" onSubmit={searchMovies}>
            <input className="search__input" type="text" name="query"
                    placeholder="Search" ref={inputRef}
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
            <button className="search__button" type="submit"> <img src={searchIcon} alt="search-icon"></img> </button>
        </form>
      </header>
      <h1 className="main_title">Movie Search</h1>
      
      <Cards movies={movies} />
      </React.Fragment>
  )
}
