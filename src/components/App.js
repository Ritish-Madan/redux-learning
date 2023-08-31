import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavouritesAction } from "../actions";

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })

    store.dispatch(addMovies(data))
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    if(movies.favourites.indexOf(movie) !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavouritesAction(val))
  }
  render(){
    const {movies, search} = this.props.store.getState(); //{movies, search}
    const {list, favourites, showFavourites} = movies; 
    const displayMovies = showFavourites ? favourites : list
    return( 
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className="tab" onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {
            displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              store={this.props.store}
              isFavourite = {this.isFavourite(movie)}
              />
            ))
            }
          </div>
        </div>
      </div>
      )
  }
}

export default App;
