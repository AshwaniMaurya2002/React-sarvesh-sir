import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContextProvider";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const data = {
      name: formData.name,
      email: formData.email,
    };

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/home");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}></form>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">password </label>
      <input
        type="password     "
        id="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />

      <button type="submit">Submit</button>
    </div>
  );
};

export default Login;
