import styled from "styled-components";
import Button from "./Button";
import TermsOfService from "./TermsOfService";

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

function App() {
  return (
    <div>
      <StyledTermsOfService></StyledTermsOfService>
      <SubmitButton>계속하기</SubmitButton>
    </div>
  );
}

export default App;
