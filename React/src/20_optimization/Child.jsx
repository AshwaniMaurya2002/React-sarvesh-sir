import React from "react";

const Child = (props) => {
  console.log("child");
  console.log(props);

  return (
    <div>
      <h1>Child child Component</h1>
    </div>
  );
};

//it memoized the whole component until it changed
export default React.memo(Child);
