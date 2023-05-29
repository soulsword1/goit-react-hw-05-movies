import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  margin-left: 15px;
  padding: 10px;

  cursor: pointer;
  color: #fff;
  text-decoration: none;
  background-color: #647c90;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #647c90;
    background-color: #fff;
    border: 1px solid #647c90;
  }
`;
