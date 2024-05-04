import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value); // App 컴포넌트의 handleClick 함수에게 value값 넘겨줌
  return (
    <button onClick={handleClick}>
      <HandIcon value={value}></HandIcon>
    </button>
  );
}

export default HandButton;
