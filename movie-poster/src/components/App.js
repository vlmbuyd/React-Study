import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import MovieList from "./MovieList";
import { mockData } from "../mock";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: #242a6b;
`;

function App() {
  const mock = mockData.results;

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <MovieList items={mock}></MovieList>
    </Container>
  );
}

export default App;
