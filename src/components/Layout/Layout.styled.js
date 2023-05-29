import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #3B3B3B;
  text-decoration: none;

  &.active {
    color: #970c10;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Navigation = styled.nav`
  padding: 20px;
  margin-bottom: 10px;

  box-shadow: 0 4px 2px -2px gray;
`;
