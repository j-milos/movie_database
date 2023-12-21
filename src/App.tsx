import { useEffect, useState } from "react";
import s from "./App.module.scss";
import MoviesList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4bdb0a10`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouritesMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className={s.app}>
      <img className={s.stickyImg} src="/moviesimg.png" alt="" />
      <div className={s.container}>
        <div className={s.heading}>
          <div className={s.headingText}>
            <h1>Welcome.</h1>
            <h2>
              Milions of movies,TV shows and people to discover. Explore now.
            </h2>
          </div>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <div className={s.headingForMovies}>
          <MovieListHeading heading="Movies" />
        </div>
        <div className={s.movies}>
          <MoviesList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div className={s.movieUniverseTextSection}>
          <h1>Movie Universe</h1>
          <div className={s.textWrapper}>
            <p>
              Get access to maintain your
              <i> own custom personal lists, track what you've seen</i> and
              search and filter for<i> what to watch</i>
              next—regardless if it's in theatres, on TV or available on popular
              streaming services like Netflix, Amazon Prime Video, FlixOlé,
              Zee5, and Sun Nxt.
            </p>
            <p>
              Enjoy TMDB ad free Maintain a personal watchlist Filter by your
              subscribed streaming services and find something to watch Log the
              movies and TV shows you've seen Build custom lists Contribute to
              and improve our database
            </p>
          </div>
        </div>
        <div className={s.headingForMovies}>
          <MovieListHeading heading="Favourites" />
        </div>
        <div className={s.movies}>
          <MoviesList
            movies={favourites}
            handleFavouritesClick={removeFavouritesMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.footerTextWrapper}>
          <h3>THE BASICS</h3>
          <span>About TMDB</span>
          <span>Contact Us</span>
          <span>Support Forums</span>
          <span>API</span>
          <span>System Status</span>
        </div>
        <div className={s.footerTextWrapper}>
          <h3>GET INVOLVED</h3>
          <span>Contribution Bible</span>
          <span>Add New Movie</span>
          <span>Add New TV Show</span>
        </div>
        <div className={s.footerTextWrapper}>
          <h3>COMMUNITY</h3>
          <span>Guidelines</span>
          <span>Discussions</span>
          <span>Leaderboard</span>
        </div>
        <div className={s.footerTextWrapper}>
          <h3>LEGAL</h3>
          <span>Terms of Use</span>
          <span>API Terms of Use</span>
          <span>Privacy Policy</span>
          <span>API</span>
          <span>DMCA Policy</span>
        </div>
      </div>
    </div>
  );
}

export default App;
