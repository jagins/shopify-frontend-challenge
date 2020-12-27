const initalState = {
    isLoading: false,
    movieList: [],
    nominatedMovies: [],
    clickedMovies: {}
}

export const reducer = (state = initalState, action) =>
{
    switch(action.type)
    {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS': {
            return {
                ...state,
                movieList: action.payload,
                isLoading: false,
            }
        }
        case 'ADD_MOVIE': {
            return {
                ...state,
                nominatedMovies: [...state.nominatedMovies, action.payload],
                clickedMovies: {...state.clickedMovies, [`${action.payload.Title} (${action.payload.Year})`]: action.payload }
            }
        }
        case 'REMOVE_MOVIE': {
            return {
                ...state,
                nominatedMovies: state.nominatedMovies.filter(movie => movie.imdbID !== action.payload.imdbID)
            }
        }
        default: 
            return state
    }
}