import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Navigation } from './Layout.styled';

export default function Layout() {
  return (
    <div>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
