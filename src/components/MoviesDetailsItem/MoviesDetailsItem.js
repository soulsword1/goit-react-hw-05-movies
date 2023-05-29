import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, MovieImg, GenresList, AdditionalinfoList } from './MoviesDetailsItem.styled';

export default function MoviesDetailsItem({ movie }) {
  const getYear = release_date => release_date.substr(0, 4);
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  console.log();
  return (
    <Container>
      <MovieImg src={imgUrl} alt={title} width="300" height="400" />
      <h1>
        {title}({getYear(release_date)})
      </h1>
      <p>User Score: {Math.round(vote_average * 100) / 100}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <GenresList>
        {genres.map(g => (
          <li key={g.id}>{g.name}</li>
        ))}
      </GenresList>
      <p>Additional info</p>
      <AdditionalinfoList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AdditionalinfoList>
    </Container>
  );
}

MoviesDetailsItem.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
