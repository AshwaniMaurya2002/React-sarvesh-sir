import React, { useState } from "react";

const StatesInFBC = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const decCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Learn States in Function Based</h1>
      <h2>Counter: {count}</h2>
      <button onClick={updateCount}>click</button>
      <button onClick={decCount} disabled={count === 0 ? true : false}>
        decrement
      </button>
      <button onClick={resetCount} disabled={count === 0 ? true : false}>
        Reset
      </button>
    </>
  );
};

export default StatesInFBC;
