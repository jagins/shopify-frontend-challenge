import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
function MovieList() 
{
    const [movieList, setMovieList] = useState(null);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=san&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res => setMovieList(res.data.Search))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className='movie-list'>
            {movieList && (
                 movieList.map(movie =>
                    <MovieCard key={movie.imdbID} movie={movie}/>
                )
            )}
        </div>
    )
}

export default MovieList;