import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 5px;
  width: 330px;
  height: 150px;
  background-color: white;
`;

const Title = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
`;

const ClosedBtn = styled.button`
  position: absolute;
  right: 15px;
  bottom: 20px;
`;

function Modal({ onClick }) {
  return (
    <Container>
      <ModalContainer>
        <Title>안녕하세요</Title>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <ClosedBtn onClick={onClick}>닫기</ClosedBtn>
      </ModalContainer>
    </Container>
  );
}

export default Modal;
