import ReviewList from "./ReviewsList";
import items from "../mock.json";

function App() {
  return (
    <div>
      <ReviewList items={items}></ReviewList>
    </div>
  );
}

export default App;
