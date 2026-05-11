import React, { useState } from "react";

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello World");

  const updateToggle = () => {
    // when we update accorifing to the previous state
    setToggle((prev) => !prev);
  };

  // used thos

  return (
    <>
      <button onClick={updateToggle}> Toggle</button>
      {/* this is shortcircuit */}
      {toggle && <h1>Toggle example</h1>}

      <h1>{data}</h1>
      <button
        onClick={() => {
          setData("Byee World");
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default ToggleComponent;
