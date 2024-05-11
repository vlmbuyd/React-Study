import { useState } from "react";
import FoodList from "./FoodList";
import { getReviews } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleLoadClick = async () => {
    const { foods } = await getReviews();
    setItems(foods);
  };
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItems} onDelete={handleDelete}></FoodList>
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
