import { Fragment } from "react";
import ReactDOM from "react-dom/client";

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

function getResult(left, right) {
  if (WINS[left] === right) return "승리";
  else if (left === WINS[right]) return "패배";
  return "무승부";
}

function handleClick() {
  console.log("가위바위보!");
}

const me = "rock";
const other = "scissor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>멍멍</button>
    <button onClick={handleClick}>바보</button>
    <button onClick={handleClick}>똥 </button>
  </>
);
