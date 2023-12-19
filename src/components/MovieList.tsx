import React from "react";
import s from "./MovieList.module.scss";

const MoviesList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className={s.movieList} key={movie.id}>
          <img src={movie.Poster} className={s.posetImg} alt="movie"></img>
          <div className={s.overlay}></div>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
