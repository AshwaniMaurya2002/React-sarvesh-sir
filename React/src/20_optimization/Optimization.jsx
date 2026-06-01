import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const handleAdd = () => {
    setAdd((prev) => prev + 1);
  };
  const handleMinus = () => {
    setMinus((prev) => prev - 1);
  };

  //?it memoized the value
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //! it memoized the function
  const data = useCallback(() => {
    console.log("I am data ");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Optimization</h1>
      <section style={{ padding: "50px" }}>
        <strong>Addition is: {add}</strong>
        <button onClick={handleAdd}>Increment</button>
      </section>

      <hr />
      <section>
        <strong>Subtraction is :{minus}</strong>
        <button onClick={handleMinus}>Decrement</button>
      </section>

      <hr />

      <section>
        <strong>Multiplication is :{multiply}</strong>
      </section>

      <hr />

      <Child data={data} />
    </div>
  );
};

export default Optimization;
