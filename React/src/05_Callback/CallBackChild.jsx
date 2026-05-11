import React from "react";
const CallBackChild = (props) => {
  console.log(props);
  let data = "Hello World";
  return (
    <div>
      <button
        onClick={() => {
          props.getData(data);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default CallBackChild;
