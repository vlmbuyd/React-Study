import styled from "styled-components";

const Button = styled.button`
  background-color: #6500c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;

  &:active,
  &:hover {
    background-color: #7760b4;
  }
`;

export default Button;
