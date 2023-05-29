import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchMovieByTitleAPI from '../services/FetchMovieByTitleAPI';
import MoviesForm from '../components/MoviesForm';

export default function Movies() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    FetchMovieByTitleAPI(query).then(data => setMovies(data.results));
  }, [query]);

  const onSubmit = query => setSearchParams({ query});

  return (
    <>
    <MoviesForm onSubmit={onSubmit} />
      {movies && (
        <ul>
          {movies.map(({ id, title, name }) => {
            if (title) {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              );
            }

            return (
              <li key={id}>
                <Link to={`${id}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

