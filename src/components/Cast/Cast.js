import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovieCastAPI from '../../services/FetchMovieCastAPI';
import img from '../../img/person_img.png';
import { CastList, CastItem } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMovieCastAPI(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <CastList>
      {cast &&
        cast.map(c => {
          return (
            <CastItem key={c.name}>
              <img
                src={
                  c.profile_path
                    ? 'https://image.tmdb.org/t/p/original/' + c.profile_path
                    : img
                }
                alt={c.name}
                width="150"
                height="200"
              />
              <p>{c.name}</p>
              <p>{c.character}</p>
            </CastItem>
          );
        })}
    </CastList>
  );
}
