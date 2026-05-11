import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const UpliftingParent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>learn state UpliftingParent</h1>

      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
};

export default UpliftingParent;
