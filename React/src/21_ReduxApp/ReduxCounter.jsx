import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decre, incre, reset } from "./counterSlice";

const ReduxCounter = () => {
  let count = useSelector((state) => state.counter);

  const disptach = useDispatch();
  const handleIncrement = () => {
    disptach(incre());
  };
  const handleDecrement = () => {
    disptach(decre());
  };
  const handleReset = () => {
    disptach(reset());
  };

  return (
    <div>
      <h3>Redux-counter--{count} </h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ReduxCounter;
