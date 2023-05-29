import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import FetchMovieDetailsAPI from '../services/FetchMovieDetailsAPI';

export default function ImageGalleryMovieDetailsItem() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  console.log(backLinkLocation);

  useEffect(() => {
    if (movieId) {
      FetchMovieDetailsAPI(movieId).then(data => setMovie(data));
    }
  }, [movieId]);
  // let imgUrl = ''
  // if(movie){
  // const getYear = release_date => release_date.substr(0,4);
  // const { title, release_date, poster_path, vote_average, overview, genres } = movie;
  //  imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  // }

  // console.log(imgUrl)

  return (
    <>
      <Link to={backLinkLocation.current}>Назад</Link>
      {movie && (
        <section>
          <img
            src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
            alt={movie.title}
            width="300"
            height="400"
          />
          <h1>
            {movie.title}({movie.release_date.substr(0, 4)})
          </h1>
          <p>User Score: {Math.round(movie.vote_average * 100) / 100}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(g => (
              <li key={g.id}>{g.name}</li>
            ))}
          </ul>
          <p>Additional info</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
}
