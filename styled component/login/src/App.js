import styled from "styled-components";
import codeitImg from "./assets/codeit.png";
import Label from "./Label";
import Inputs from "./Inputs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

const Join = styled.span`
  color: #848187;

  & a {
    color: #6500c3;
    font-weight: bold;
  }
`;

const Title = styled.div`
  width: 200px;
  height: 60px;
  background: url(${codeitImg}) no-repeat;
  background-position: center center;
  background-size: 100% auto;
`;

function App() {
  return (
    <Container>
      <Title></Title>
      <Join>
        회원이 아니신가요? <a href="#">회원가입 하기</a>
      </Join>
      <Label>이메일</Label>
      <Inputs placeholder="styled@codeit.kr"></Inputs>
      <Label>비밀번호</Label>
      <Inputs placeholder="비밀번호"></Inputs>
    </Container>
  );
}

export default App;
