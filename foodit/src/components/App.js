import { useState } from "react";
import FoodList from "../FoodList";
import items from "../mock.json";

function App() {
  const [order, setOrder] = useState("createdAt");

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItems}></FoodList>
    </div>
  );
}

export default App;
