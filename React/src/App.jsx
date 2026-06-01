// import React, { use, useState } from "react";
// import InlineCss from "./09_ReactCss/InlineCss";
// // import Card from "./09_ReactCss/Card";
// import LifeCycleInCBC from "./12_LifeCycle/LifeCycleInCBC";
// import LifeCycleInFBC from "./12_LifeCycle/LifeCycleInFBC";
// import Users from "./12_LifeCycle/Users";
// // import Products from "./13_fetch/Products";
// import ProductTask from "./14_ProductTask/ProductTask";
// import Reducer from "./15_Reducer/Reducer";
// import Task from "./17_Task/Task";
// import { UserContextProvider } from "./17_Task/context/UserContextProvider";
// import Routing1 from "./18_Routing/Routing1";
// import Routing2 from "./18_Routing/Routing2";
// import Products from "./19_customHooks/Products";
// import Optimization from "./20_optimization/Optimization";
// // import ControlledForm2 from "./allTopics/08- Forms/ControlledForm2";
// // import Employee from "./07_list/Employee";
// // import UserList from "./07_list/UserList";
// // import CallbackParent from "./05_Callback/CallbackParent";
// // import UpliftingParent from "./06_stateUplifting/UpliftingParent";
// // import DrillingParent from "./04_props Drilling/DrillingParent";

// const App = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => setToggle((prev) => !prev);

//   return (
//     <>
//       {/* <DrillingParent /> */}

//       {/* <button onClick={handleToggle}>Toggle ME</button>
//       {toggle && <LifeCycleInCBC />} */}

//       {/* <LifeCycleInFBC /> */}
//       {/* <button onClick={handleToggle}>Toggle ME</button>
//       {toggle && <Users />} */}

//       {/* <Products
//        */}

//       {/* <ProductTask /> */}

//       {/* <Reducer />
//        */}

//       {/* <UserContextProvider>
//         <Task />
//       </UserContextProvider> */}

//       {/* <Routing2 /> */}
//       {/* <Products /> */}
//       {/* <Optimization /> */}
//     </>
//   );
// };
// export default App;

//! new code

import React from "react";
import Routing1 from "./18_Routing/Routing1";

const App = () => {
  return (
    <div>
      <Routing1 />
    </div>
  );
};

export default App;
