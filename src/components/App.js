import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    console.log("HERE")
    store.subscribe(() => {
      this.forceUpdate();
    })

    store.dispatch(addMovies(data))
  }

  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    if(favourites.indexOf(movie) !== -1){
      return true;
    }
    return false;
  }
  render(){
    console.log("RENDER")
    console.log(this.props.store.getState())
    const {list, favourites} = this.props.store.getState(); // {list: [], favourites: []}
    return( 
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              store={this.props.store}
              isFavourite = {this.isFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
      )
  }
}

export default App;
