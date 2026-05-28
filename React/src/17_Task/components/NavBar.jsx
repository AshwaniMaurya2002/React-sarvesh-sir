import { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { data, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const dataPresent = localStorage.getItem("user");
    dataPresent ? localStorage.removeItem("user") : null;
    navigate("/");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h4>Context-Task</h4>

      <nav style={{ display: "flex", gap: "30px" }}>
        {user && (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogout}> Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
