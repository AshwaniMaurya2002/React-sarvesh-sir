import React, { use, useState } from "react";
import InlineCss from "./09_ReactCss/InlineCss";
// import Card from "./09_ReactCss/Card";
import LifeCycleInCBC from "./12_LifeCycle/LifeCycleInCBC";
// import ControlledForm2 from "./allTopics/08- Forms/ControlledForm2";
// import Employee from "./07_list/Employee";
// import UserList from "./07_list/UserList";
// import CallbackParent from "./05_Callback/CallbackParent";
// import UpliftingParent from "./06_stateUplifting/UpliftingParent";
// import DrillingParent from "./04_props Drilling/DrillingParent";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <DrillingParent /> */}

      <button onClick={handleToggle}>Toggle ME</button>
      {toggle && <LifeCycleInCBC />}
    </>
  );
};
export default App;
