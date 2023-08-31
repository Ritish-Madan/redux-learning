import { ADD_MOVIE_TO_LIST } from "../actions";

export const initialSearchState = {
    showSearchResult:  false
}

export function search(state = initialSearchState, action){
    switch(action.type){
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResult: false
            }
        default:
            return state;
    }
}