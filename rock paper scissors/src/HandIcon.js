import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";
import "./HandButton.css";

function HandIcon({ value, className }) {
  const src =
    value === "rock" ? rockImg : value === "scissor" ? scissorImg : paperImg;
  return <img className={className} src={src} alt={value}></img>;
}

export default HandIcon;
