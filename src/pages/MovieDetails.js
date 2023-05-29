import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import FetchMovieDetailsAPI from '../services/FetchMovieDetailsAPI';
import MoviesDetailsItem from '../components/MoviesDetailsItem/MoviesDetailsItem';
import BackButton from '../components/BackButton';

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

  return (
    <>
      <BackButton location={backLinkLocation.current} />
      {movie && (
        <section>
          <MoviesDetailsItem movie={movie} />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
}
