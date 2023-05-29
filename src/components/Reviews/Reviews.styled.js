import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  list-style: none;
`;

export const ReviewsItem = styled.li`
  padding: 10px;
  width: 500px;

  border: 1px solid #647c90;
  border-radius: 10px;

  &:not(:last-child){
    margin-bottom: 5px;
  }
`;
