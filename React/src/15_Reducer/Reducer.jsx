import React, { useReducer } from "react";
import { reducerFunc, intialState } from "./counterState";

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunc, intialState);

  return (
    <div>
      <h1>Learn useReducer : {count}</h1>
      <button onClick={() => dispatch("incre")}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch("res")}>Reset</button>
    </div>
  );
};

export default Reducer;
