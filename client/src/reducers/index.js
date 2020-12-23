const initalState = {
    isLoading: false,
    movieList: [],
    nominatedMovies: [],
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
                nominatedMovies: [...state.nominatedMovies, action.payload]
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