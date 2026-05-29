import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ fontWeight: "700" }}>Browser Routing Example</div>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Home</Link>
          <Link to={"/signup"}>Signup</Link>
        </nav>
      </header>
    </>
  );
};

export default Nav;
