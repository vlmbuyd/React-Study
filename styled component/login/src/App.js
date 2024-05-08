import styled from "styled-components";
import codeitImg from "./assets/codeit.png";
import Label from "./Label";
import Inputs from "./Inputs";
import Button from "./Button";
import KaKaoButton from "./KaKaoButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 8px;
`;

function App() {
  return (
    <Container>
      <Header>
        <Title></Title>
        <Join>
          회원이 아니신가요? <a href="#">회원가입 하기</a>
        </Join>
      </Header>
      <Label>이메일</Label>
      <Inputs placeholder="styled@codeit.kr"></Inputs>
      <Label>비밀번호</Label>
      <Inputs placeholder="비밀번호"></Inputs>
      <Button>로그인 하기</Button>
      <KaKaoButton>카카오 로그인</KaKaoButton>
    </Container>
  );
}

export default App;
