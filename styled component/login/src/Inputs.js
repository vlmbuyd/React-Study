import styled from "styled-components";

const Input = styled.input`
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};

  &::placeholder {
    color: #c4c5cd;
  }

  &:focus {
    border-bottom: 2px solid #7760b4;
  }
`;

function Inputs({ placeholder }) {
  return <Input placeholder={placeholder}></Input>;
}

export default Inputs;
