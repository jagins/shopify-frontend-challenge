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