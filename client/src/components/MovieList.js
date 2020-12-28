import React from 'react';
import MovieCard from './MovieCard';
import {connect} from 'react-redux';
import {getMovies} from '../actions';

function MovieList(props) 
{
    const {isLoading, movieList} = props;
    return (
        <div className='movie-list'>
            {movieList && !isLoading ? (
                 movieList.map(movie =>
                    <MovieCard key={movie.imdbID} movie={movie}/>
                )
            ): <h3>Please wait, loading your results</h3>}
            {movieList.length === 0 && !isLoading && (<div>
                <h3>Welcome to the Shoppies!</h3>
                <p>The Shoppie is movie award for entrepreneurs. Feel free to use the search bar at the top right corner and search for movies to add to your nomination list. Choose wisely you are only allowed to pick 5 movies </p>
            </div>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        movieList: state.movieList
    }
}

export default connect(mapStateToProps, {getMovies})(MovieList);