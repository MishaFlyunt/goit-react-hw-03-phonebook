import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 5px 0 18px;
`;

export const LabelStylet = styled.label`
  /* display: flex; */
`;

export const FieldStyled = styled(Field)`
  width: 200px;
`;

export const ButtonForm = styled.button`
  width: 100px;
  padding: 8px;
  border-radius: 15px;
  margin: 0 auto;
`;

export const ErrorMess = styled(ErrorMessage)`
  width: 200px;
  color: red;
  font-size: 10px;
`;
