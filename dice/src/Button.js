import classNames from "classnames";
import "./Button.css";

function Button({ children, onClick, color, className = "" }) {
  // const classNames = `Button ${color} ${className}`;
  return (
    <button
      className={classNames("Button", color, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
