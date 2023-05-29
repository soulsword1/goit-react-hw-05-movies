import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovieReviewsAPI from '../../services/FetchMovieReviewsAPI';

export default function Cast() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovieReviewsAPI(id).then(data => setReviews(data.results));
  }, [id]);

  return (
    <ul>
      {reviews ? (
        reviews.map(r => {
          return (
            <li key={r.author}>
              <h3>Author: {r.author}</h3>
              <p>{r.content}</p>
            </li>
          );
        })
      ) : (
        <li>We don't have any reviews for this movie</li>
      )}
    </ul>
  );
}
