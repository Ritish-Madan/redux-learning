import { API_HASH, API_KEY } from "../config/apiconfigs";

// ACTION TYPES
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"



// ACTION CREATORS
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}

export function addFavourites(movie){
    return {
        type: ADD_FAVOURITES,
        movie
      }
}

export function removeFavourites(movie){
  return {
      type: REMOVE_FAVOURITES,
      movie
    }
}

export function setShowFavouritesAction(val) {
  return {
    type:SHOW_FAVOURITES,
    val
  }
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie){
  const url = `http://www.omdbapi.com/?i=${API_HASH}&apikey=${API_KEY}&t=${movie}`
  return function (dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      // Dispatching the action from the function.
      dispatch(addSearchResult(movie))
    })
  } 
}

export function addSearchResult(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}


