import React from "react";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { userContext } from "../context/UserContextProvider";

const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <NavBar />

      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      <p style={{ padding: "10px", textAlign: "center", color: "gray" }}>
        Welcome {user.name}
      </p>
    </div>
  );
};

export default Home;
