import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const Parent1 = () => {
  let data1 = "hii";
  let data2 = [10, 20, 30, 40];
  let data3 = { name: "John" };
  return (
    <>
      <h1>Parent Component</h1>
      {/* <Child2 data={{ data1, data2, data3 }} /> */}
      <Child3 prop={data1} prop2={data2} prop3={data3} />
    </>
  );
};

export default Parent1;
