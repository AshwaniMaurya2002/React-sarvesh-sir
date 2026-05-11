import React from "react";
import NestedChild from "./NestedChild";

const Child = (props) => {
  return (
    <>
      <h1>Child Component</h1>
      <NestedChild props={props} />
    </>
  );
};

export default Child;
