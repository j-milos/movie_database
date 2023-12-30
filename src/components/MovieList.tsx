import s from "./MovieList.module.scss";
import { MovieType } from "../types/types";

type MovieListProps = {
  movies: MovieType[];
  handleFavouritesClick: (movie: MovieType) => void;
  favouriteComponent?: React.ReactNode;
};

const MoviesList: React.FC<MovieListProps> = ({
  movies,
  handleFavouritesClick,
  favouriteComponent,
}) => {
  return (
    <>
      {movies?.map((movie) => (
        <div key={movie.imdbID} className={s.movieList}>
          <img src={movie.Poster} className={s.posterImg} alt="movie"></img>
          <div
            onClick={() => handleFavouritesClick(movie)}
            className={s.overlay}
          >
            {favouriteComponent}
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
