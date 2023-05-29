import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 40px;
`

export const MovieImg = styled.img`
  border-radius: 5px;
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

export const GenresList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const AdditionalinfoList = styled.ul`
  color: #3B3B3B;
  text-decoration: none;    
  list-style: none;
  margin: 0;
  padding: 0;
`
