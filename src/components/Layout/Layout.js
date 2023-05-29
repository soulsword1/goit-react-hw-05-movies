import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }
`;

export default function Layout() {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
