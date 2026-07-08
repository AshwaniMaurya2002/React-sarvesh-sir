import React, { useState } from "react";

const Heart = () => {
  const [count, setCount] = useState(0);

  const updateLike = () => {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    //! efficient ways
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ fontSize: "100px" }}>
      <div onClick={() => setCount(count + 1)}>
        💖<sup>{count}</sup>
      </div>
    </div>
  );
};

export default Heart;
