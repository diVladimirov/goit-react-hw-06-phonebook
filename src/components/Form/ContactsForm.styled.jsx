import styled from 'styled-components';

export const FormStyle = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 20px;
`;

export const FormStyleLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const FormStyleInput = styled.input`
  border-radius: 5px;
  padding: 5px;
`;

export const FormStyleButton = styled.button`
  margin-top: 10px;
  background-color: #008cba;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  transition: all 400ms linear;
  :hover {
    background-color: white;
    color: #008cba;
  }
`;
