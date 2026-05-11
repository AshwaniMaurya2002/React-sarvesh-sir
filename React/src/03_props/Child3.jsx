import React from "react";

const Child3 = ({ prop, prop2, prop3: { name } }) => {
  console.log(prop);
  console.log(prop2);
  console.log(name);
  return (
    <div>
      <h1>
        {prop}
        <br />

        {prop2}
        <br />
        {name}
      </h1>
    </div>
  );
};

export default Child3;
