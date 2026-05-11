import React from "react";

const Child2 = (props) => {
  const { data1, data2, data3 } = props.data;
  console.log(data1);
  console.log(...data2);
  console.log(data3.name);
  return (
    <>
      <h1>Child2 Component</h1>
      <h2>
        {data1}
        {data2}
      </h2>
    </>
  );
};

export default Child2;
