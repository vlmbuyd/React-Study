import { useState } from "react";
import Modal from "./Modal";

function Contents({ onClick }) {
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={onClick}>버튼 열기</button>
    </div>
  );
}

function App() {
  const [openBtn, setOpenBtn] = useState(false);
  const clickOpen = () => {
    setOpenBtn(true);
  };
  const clickClosed = () => {
    setOpenBtn(false);
  };

  return (
    <div>
      {openBtn ? (
        <div>
          <Contents></Contents> <Modal onClick={clickClosed}></Modal>
        </div>
      ) : (
        <Contents onClick={clickOpen}></Contents>
      )}
    </div>
  );
}

export default App;
