import React, { useState } from "react";

const Revision = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      The count is:{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Revision;
