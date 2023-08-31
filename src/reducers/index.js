import { combineReducers } from "redux";
import { movies, initialMoviesState } from "./moviesReducer";
import { initialSearchState, search } from "./searchReducer";

// Understanding how combineReducer Pick initialRootReducerState
const initialRootReducerState = {
    movies: initialMoviesState,
    search: initialSearchState
}

/*

Combine Reducer returns this state like 

Args: state and action. 

Working: 
As the action is dispatched, the reducer is declared to the createStore like
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

So the action dispatch actually tells me what action to do and delivers it to reducer where reducer
takes the action and indentifies the work to do with the respective action type.

Then Combine reducer actually calls the 

{
    movies: movies(state.movies),
    search: search(state.search)
}

Where these movies and search reducer functions are called and for the matching action they update the store.
and returnes in below template.

Returns:
{
    movies: initialMoviesState,
    search: initialSearchState

}
*/

export default combineReducers({
    movies,
    search
})