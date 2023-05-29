import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
`;

export const CastItem = styled.li`
  padding: 10px;
  width: 200px;

  text-align: center;
  overflow: hidden;
  border: 1px solid #647c90;
  border-radius: 10px;

  &:not(:last-child){
    margin-bottom: 5px;
  }
`;
