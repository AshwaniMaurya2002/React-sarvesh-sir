import React, { useState } from "react";
import CallBackChild from "./CallBackChild";

const CallbackParent = () => {
  const [data, setData] = useState("");
  function getData(value) {
    console.log(value);
    setData(value);
  }
  return (
    <div>
      <h1>learn callback in react</h1>
      <CallBackChild getData={getData} />
    </div>
  );
};

export default CallbackParent;
