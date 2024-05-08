import styled from "styled-components";
import kakaoIcon from "./assets/kakao.svg";
import Button from "./Button";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }

  &:hover {
    background-color: #fee500;
  }
`;

function KaKaoButton({ children }) {
  return (
    <StyledButton>
      <Icon src={kakaoIcon} alt="kakao icon"></Icon>
      {children}
    </StyledButton>
  );
}

export default KaKaoButton;
