import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

function HandIcon({ value }) {
  const src =
    value === "rock" ? rockImg : value === "scissor" ? scissorImg : paperImg;
  return <img src={src} alt={value}></img>;
}

export default HandIcon;
