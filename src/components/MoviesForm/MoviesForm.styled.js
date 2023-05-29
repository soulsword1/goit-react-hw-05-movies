import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-block;
  margin: 0 auto;
  margin-left: 15px;
  padding: 10px;

  color: #fff;
  text-decoration: none;
  background-color: #647c90;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FormButton = styled.button`
  color: #970c10;
  cursor: pointer;

  &:hover {
    color: #3b3b3b;
  }
`;
