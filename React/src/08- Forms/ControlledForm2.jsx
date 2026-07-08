import React, { useState } from "react";

const ControlledForm2 = () => {
  const [fromData, setFormData] = useState({
    username: " ",
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...fromData, [name]: value });

    let existingUsers = JSON.parse(localStorage.getItem("user")) || [];
    existingUsers.push(fromData);
    localStorage.setItem("user", JSON.stringify(existingUsers));
    alert("user created");

    //clearnig form FormData
    setFormData({ username: "", email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <p>handle multiple inputs using single state</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={FormData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">emails</label>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          value={FormData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          id="password  "
          placeholder="enter password"
          value={FormData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ControlledForm2;
