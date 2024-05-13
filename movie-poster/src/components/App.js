import styled from "styled-components";
import MovieList from "./MovieList";
import GlobalStyles from "./GlobalStyles";
import { mockData } from "../mock";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
  background-color: #242a6b;
`;

function App() {
  const mock = mockData.results;

  return (
    <Container>
      <GlobalStyles></GlobalStyles>
      <MovieList items={mock}></MovieList>
    </Container>
  );
}

export default App;
