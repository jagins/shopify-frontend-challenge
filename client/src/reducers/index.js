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
        default: 
            return state
    }
}