import HandIcon from "./HandIcon";
import purpleImg from "./assets/purple.svg";

const style = {
  width: "166px",
  height: "166px",
  border: "none",
  outline: "none",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  backgroundImage: `url("${purpleImg}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
};

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value); // App 컴포넌트의 handleButtonClick 함수에게 value값 넘겨줌
  return (
    <button style={style} onClick={handleClick}>
      <HandIcon value={value}></HandIcon>
    </button>
  );
}

export default HandButton;
