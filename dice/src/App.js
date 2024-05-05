import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };

  const handleClarClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClarClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num}></Dice>
        <h2>총점</h2>
        <p>{sum}</p>
        <p>{gameHistory.join(", ")}</p>
      </div>
    </div>
  );
}

export default App;
