import React, {useState, useEffect} from 'react'

export default function Popular(props) {
    const api_key = props.api_key;
    const poster_w185 = props.poster_w185;
    const [movies, setMovies] = useState([]);

    const getPopular = async () => {
        const pages = 2;
        try {
            const all_data = []
            for (let i = 1; i <= pages; i++) {
              const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;
              const res = await fetch(url);
              const data  = await res.json();
              Array.prototype.push.apply(all_data, data.results);
            }
            setMovies(all_data);
            console.log(all_data);
        }catch(err){
            console.error(err);
        }
    }

    
    useEffect(() => {
        if(api_key !== null){
            console.log(api_key);
            getPopular()
        }
      }, [api_key]);
     

    return (
        <React.Fragment>
            <h1 className="main_title">Popular Movies</h1>
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
        </React.Fragment>
    )
}
