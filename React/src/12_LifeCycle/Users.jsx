import React, { useEffect, useRef, useState } from "react";
const Products = () => {
  const [count, setCount] = useState(0);
  // const [intialRender, setintialRender] = useState(true); //not using this use ref instead to stop re rendering

  const intialRender = useRef(true);
  useEffect(() => {
    console.log("Component Mounted");
    const id = setInterval(() => console.log("API Called"), 2000);
    return () => {
      console.log("Component Umounted");
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (intialRender.current) {
      intialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);
  return (
    <>
      <h1>Count :{count}</h1>
      <h1>Learn Life cycle in FBC</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </>
  );
};

export default Products;
