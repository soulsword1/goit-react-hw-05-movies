import PropTypes from 'prop-types';
import { Form, FormButton } from './MoviesForm.styled';

export default function MoviesForm({ onSubmit }) {
  const onSearch = e => {
    e.preventDefault();
    onSubmit( e.target.movie.value);
  };

  return (
    <Form onSubmit={onSearch}>
        <input name="movie" />
        <FormButton>Search</FormButton>
    </Form>
  );
}

MoviesForm.propTypes = {
  onSubmit: PropTypes.func,
};
