import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovieReviewsAPI from '../../services/FetchMovieReviewsAPI';
import { ReviewsList, ReviewsItem } from './Reviews.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchMovieReviewsAPI(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  console.log(reviews);
  return (
    <ReviewsList>
      {reviews &&
        reviews.map(r => {
          return (
            <ReviewsItem key={r.author}>
              <h3>Author: {r.author}</h3>
              <p>{r.content}</p>
            </ReviewsItem>
          );
        })}

      {reviews.length === 0 && (
        <ReviewsItem>We don't have any reviews for this movie</ReviewsItem>
      )}
    </ReviewsList>
  );
}
