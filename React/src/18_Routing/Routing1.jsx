import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from "./Signup";
// import Home from "./Home";

//! use lazy loading to stop unessary loading

const Home = lazy(() => import("./Home"));
const Signup = lazy(() => import("./Signup"));

const Routing1 = () => {
  return (
    <Suspense fallback={<h1>Loading.......</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routing1;
