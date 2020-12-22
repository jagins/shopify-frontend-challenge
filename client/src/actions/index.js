import axios from 'axios';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';

export const getMovies = (searchQuery) => dispatch => {
    dispatch({type: LOADING});
    axios.get(`http://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data.Search});
    })
    .catch(err => console.log(err))
}