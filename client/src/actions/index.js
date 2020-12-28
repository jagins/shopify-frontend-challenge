import axios from 'axios';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ADDMOVIE = 'ADD_MOVIE';
const REMOVEMOVIE = 'REMOVE_MOVIE';

export const getMovies = (searchQuery) => dispatch => {
    dispatch({type: LOADING});
    axios.get(`https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data.Search});
    })
    .catch(err => console.log(err))
}

export const addMovieToList = (movie) => dispatch => {
    dispatch({type: ADDMOVIE, payload: movie});
}

export const removeMovieFromList = (movie) => dispatch => {
    dispatch({type: REMOVEMOVIE, payload: movie});
}