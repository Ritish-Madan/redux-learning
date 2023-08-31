import { ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT } from "../actions";

export const initialSearchState = {
    showSearchResults:  false,
    result: {}
}

export function search(state = initialSearchState, action){
    switch(action.type){
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false
            }
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        default:
            return state;
    }
}