import React from "react";
import s from "./MovieList.module.scss";

const MoviesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className={s.movieList} key={movie.id}>
          <img src={movie.Poster} className={s.posterImg} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className={s.overlay}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
