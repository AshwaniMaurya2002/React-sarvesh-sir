import React from "react";
import NavBar from "../components/NavBar";
import { useContext } from "react";


const Home = () => {
  return (
    <div>
      <NavBar />

      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      <p style={{ padding: "10px", textAlign: "center", color: "gray" }}>
        Welcome User
      </p>
    </div>
  );
};

export default Home;
