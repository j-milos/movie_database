import s from "./MovieListHeading.module.scss";

interface MovieListHeadingProps {
  heading: string;
}

const MovieListHeading: React.FC<MovieListHeadingProps> = ({ heading }) => {
  return (
    <div className={s.movieListHeading}>
      <span>{heading}</span>
    </div>
  );
};

export default MovieListHeading;
