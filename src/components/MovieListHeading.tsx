import React from "react";
import s from "./MovieListHeading.module.scss";

const MovieListHeading = (props) => {
  return (
    <div className={s.movieListHeading}>
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
