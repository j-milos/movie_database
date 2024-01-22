import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetailsType } from "../../../types/types";
import s from "./MovieInformation.module.scss";
import { useThemeContext } from "../../../providers/ThemeProvider";
import clsx from "clsx";

export const MovieInfromation = () => {
  const { theme } = useThemeContext();

  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);

        const urlMovieInfo = `http://www.omdbapi.com/?i=${id}&apikey=4bdb0a10`;
        const movie: MovieDetailsType = await fetch(urlMovieInfo).then((data) =>
          data.json()
        );

        setMovie(movie);
      } catch (error: any) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, []);

  if (error) {
    return <div className={s.errorMsg}>Error network request failed</div>;
  }

  if (isLoading || !movie) {
    return <div className={s.loadingMsg}>Loading...</div>;
  }

  return (
    <div
      className={clsx(
        {
          [s.dark]: theme === "dark",
        },
        s.movieInformation
      )}
    >
      <div className={s.container}>
        <div className={s.movieInfoLeft}>
          <img src={movie.Poster} alt="" />
        </div>
        <div className={s.movieInfoRight}>
          <div className={s.titleGenreWrapper}>
            <div className={s.titleYear}>
              <span className={s.movieTitle}>{movie.Title}</span>
              <span className={s.movieYear}>({movie.Year})</span>
            </div>
            <div className={s.realisedGenreDirector}>
              <div className={s.realisedGenre}>
                <span className={s.movieRealised}>{movie.Released},</span>
                <span className={s.movieGenre}>{movie.Genre},</span>
                <span className={s.movieLanguage}>{movie.Language},</span>
                <span className={s.movieRuntime}>{movie.Runtime}</span>
              </div>
              <span className={s.movieDirector}>
                Director: {movie.Director}
              </span>
            </div>
          </div>

          <div className={s.imdbScore}>
            <span className={s.movieimdbRating}>{movie.imdbRating}</span>
            <img src="../imdblogo.png" alt="" />
          </div>
          <span className={s.movieBoxOffice}>
            Total Gross: {movie.BoxOffice}
          </span>
          <div className={s.plot}>
            <span className={s.plotTitle}>Overview</span>
            <p className={s.moviePlot}>{movie.Plot}</p>
          </div>
          <div className={s.writerActors}>
            <span className={s.movieActors}>Actors: {movie.Actors}</span>
          </div>
          <span className={s.movieWriter}>Writers: {movie.Writer}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfromation;
