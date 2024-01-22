import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MovieType } from "../../types/types";
import s from "./Home.module.scss";
import MovieListHeading from "../MovieInformation/components/MovieListHeading/MovieListHeading";
import AddFavourites from "../MovieInformation/components/AddFavourites/AddFavourites";
import RemoveFavourites from "../MovieInformation/components/RemoveFavourites/RemoveFavourites";
import clsx from "clsx";

function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [favourites, setFavourites] = useState<MovieType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") ?? "";

  const getMovieRequest = async (searchTerm: string) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=4bdb0a10`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const favoriteMoviesUnparsed = localStorage.getItem(
      "react-movie-app-favourites"
    );
    if (!favoriteMoviesUnparsed) return;

    const movieFavourites = JSON.parse(favoriteMoviesUnparsed);

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items: MovieType[]) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie: MovieType) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouritesMovie = (movie: MovieType) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className={s.home}>
      <div className={s.headingSearchBox}>
        <div className={s.headingText}>
          <span className={s.mainHeading}>Welcome.</span>
          <span>
            Milions of movies,TV shows and people to discover. Explore now.
          </span>
        </div>

        <div className={s.searchBox}>
          <input
            className={s.searchInput}
            value={searchTerm}
            placeholder="Search for a movie,tv show,person....."
            onChange={(e) => {
              setSearchParams((params) => {
                if (!e.target.value) {
                  params.delete("search");
                  setMovies([]);
                  return params;
                }
                params.set("search", e.target.value);
                return params;
              });
            }}
          ></input>
        </div>
      </div>

      {movies.length > 0 && (
        <section className={s.searchedFavouritesMovies}>
          <div className={clsx(s.headingForMovies)}>
            <MovieListHeading heading="Movies" />
          </div>

          <div className={s.movies}>
            {movies?.map((movie) => (
              <div key={movie.imdbID} className={s.movieList}>
                <Link to={`/movies/${movie.imdbID}`}>
                  <img
                    src={movie.Poster}
                    className={s.posterImg}
                    alt="movie"
                  ></img>
                </Link>
                <div
                  onClick={() => addFavouriteMovie(movie)}
                  className={s.overlay}
                >
                  <AddFavourites />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={s.movieUniverseTextSection}>
        <span className={s.mainHeadingSecond}>Movie Universe</span>
        <div className={s.textWrapper}>
          <p>
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like Netflix, Amazon Prime Video, FlixOlé, Zee5, and Sun
            Nxt.
          </p>
          <p>
            Enjoy TMDB ad free Maintain a personal watchlist Filter by your
            subscribed streaming services and find something to watch Log the
            movies and TV shows you've seen Build custom lists Contribute to and
            improve our database
          </p>
        </div>
      </section>

      <section className={s.searchedFavouritesMovies}>
        <div className={s.headingForMovies}>
          <MovieListHeading heading="Favourites" />
        </div>
        <div className={s.movies}>
          {favourites?.map((movie, index) => (
            <div key={index} className={s.movieList}>
              <img src={movie.Poster} className={s.posterImg} alt="movie"></img>
              <div
                onClick={() => removeFavouritesMovie(movie)}
                className={s.overlay}
              >
                <RemoveFavourites />
              </div>
            </div>
          ))}
          <div />
        </div>
      </section>
    </div>
  );
}

export default Home;
