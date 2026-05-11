import React from "react";
const Child1 = ({ prop1, prop2, prop3 }) => {
  return (
    <>
      <h1>Child Component</h1>
      <p>{prop1}</p>
      <p>{prop2}</p>
      <p>{prop3}</p>
    </>
  );
};

export default Child1;
