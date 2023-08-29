// ACTION TYPES
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_MOVIES = "SHOW_MOVIES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";


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

export function showAllMovies(movie){
  return {
      type: SHOW_MOVIES,
      movie
    }
}

export function showFavourites(movie){
  return {
      type: SHOW_FAVOURITES,
      movie
    }
}

