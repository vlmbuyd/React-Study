import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import { getFoods } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoading(true);
      setLoadingError(null);
      result = await getFoods(options);
    } catch (error) {
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      setLoading(false);
    }

    const {
      foods,
      paging: { nextCursor },
    } = result;

    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems((currentItems) => [...currentItems, ...foods]);
    }
    setCursor(nextCursor);
  };

  const handleLoadMore = () => {
    handleLoad({ order, cursor });
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItems} onDelete={handleDelete}></FoodList>
      {cursor && (
        <button disabled={loading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <p>{loadingError.message}</p>}
    </div>
  );
}

export default App;
