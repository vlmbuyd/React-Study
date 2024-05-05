import Dice from "./Dice";

function Board({ name, color, num, sum, gameHistory }) {
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num}></Dice>
      <h2>총점</h2>
      <p>{sum}</p>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
