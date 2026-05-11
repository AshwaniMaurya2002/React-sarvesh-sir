import React from "react";

const ChildB = ({ setCount }) => {
  return (
    <div>
      <h1>Child B Component</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default ChildB;
