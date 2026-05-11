import React from "react";

const NestedChild = ({ props }) => {
  let { str, arr, obj, greet } = props;

  console.log(str);
  console.log(arr);
  console.log(obj);
  console.log(greet);

  return (
    <>
      <h1>Nested Component</h1>
      <h1>{str}</h1>
      <h1>{arr}</h1>
      <h1>{obj.username}</h1>
      <button onClick={() => greet}>Cick To Greet</button>
    </>
  );
};

export default NestedChild;
