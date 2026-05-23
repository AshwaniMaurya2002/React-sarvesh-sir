import React from "react";
import { useState } from "react";

const CounterFBC = () => {
  const [state, setState] = useState({ count: 0 });
  console.log(state);
  
  return (
    <>
      <h1>Counter FBC component {state.count} </h1>
      <button
        onClick={() =>
          setState({
            count: state.count + 1,
          })
        }
      >
        {" "}
        ✅
      </button>
    </>
  );
};

export default CounterFBC;
