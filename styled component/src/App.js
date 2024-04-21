import styled from "styled-components";
// import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
  ${Input} {
    margin: 8px;
  }
`;

function App() {
  return (
    <Container>
      <h1>Size</h1>
      <Input size="small"></Input>
      <Input size="medium"></Input>
      <Input size="large"></Input>
      <h1>Round</h1>
      <Input round></Input>
      <h1>Error</h1>
      <Input error></Input>
    </Container>
  );
}

export default App;
