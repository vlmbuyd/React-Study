import Button from "./Button";
import Dice from "./Dice";

function App() {
  return (
    <div>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={4} />
    </div>
  );
}

export default App;
