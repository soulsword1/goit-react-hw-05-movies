import { Button } from './BackButton.styled';

export default function BackButton({ location }) {
  return (
    <>
      <Button to={location}>Назад</Button>
    </>
  );
}
