import HandIcon from "./HandIcon";
import purpleImg from "./assets/purple.svg";
import "./HandButton.css";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value); // App 컴포넌트의 handleButtonClick 함수에게 value값 넘겨줌
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value}></HandIcon>
    </button>
  );
}

export default HandButton;
