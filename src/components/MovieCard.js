import React from "react";
import { addFavourites, removeFavourites } from "../actions";

class MovieCard extends React.Component {
    handleFavouriteOnclick = () => {
        const {store, movie} = this.props
        store.dispatch(addFavourites(movie))
    }

    handleUnfavouriteOnclick = () => {
        const {store, movie} = this.props
        store.dispatch(removeFavourites(movie))
    }
    render () {
        const {movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}></img>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>
                        {
                            isFavourite ? 
                            <button onClick={this.handleUnfavouriteOnclick} className="unfavourite-btn">Unfavourite</button>
                            :
                            <button onClick={this.handleFavouriteOnclick} className="favourite-btn">Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard