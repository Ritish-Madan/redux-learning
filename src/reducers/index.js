import { combineReducers } from "redux";
import {movies, initialMoviesState} from "./moviesReducer";
import { initialSearchState, search } from "./searchReducer";

// Understanding how combineReducer Pick initialRootReducerState
const initialRootReducerState = {
    movies: initialMoviesState,
    search: initialSearchState
}

export default combineReducers({
    movies,
    search
})