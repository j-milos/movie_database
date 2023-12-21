import React from "react";
import s from "./MovieListHeading.module.scss";

const MovieListHeading = (props) => {
  return (
    <div className={s.movieListHeading}>
      <span>{props.heading}</span>
    </div>
  );
};

export default MovieListHeading;
