import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FetchTrendingMoviesAPI from '../../services/FetchTrendingMoviesAPI';

export default function TrendingMoviesList() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchTrendingMoviesAPI().then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        if (title) {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        }

        return (
          <li key={id}>
            <Link state={{ from: location }} to={`movies/${id}`}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
