import React, { useEffect, useState } from "react";
const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const [intialRender, setintialRender] = useState(true);
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  useEffect(() => {
    if (intialRender) {
      setintialRender(false);
      return;
    }
    console.log("Component Updated");
  }, [count]);
  return (
    <>
      <h1>Count :{count}</h1>
      <h1>Learn Life cycle in FBC</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default LifeCycleInFBC;
