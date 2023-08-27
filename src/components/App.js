import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount(){
    console.log("Hey", this.props)
    const {store} = this.props;

    store.subscribe(() => {
      console.log("Hey")
      this.forceUpdate();
    })

    store.dispatch({
      type: "ADD_MOVIES",
      movies: {name: "Superman"}
    })
  }
  render(){
    return( 
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`}/>
            ))}
          </div>
        </div>
      </div>
      )
  }
}

export default App;
