import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState("");
  const onChange = (event) => setDollars(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(dollars);
    // setDollars("");
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={dollars}
          onChange={onChange}
          placeholder="Write the dollar"
        ></input>
      </form>
      <br></br>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <ul>
        {coins.map((coin, index) => {
          dollars > coin ? (
            <li key={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ) : (
            <li>You can't buy any coin</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
