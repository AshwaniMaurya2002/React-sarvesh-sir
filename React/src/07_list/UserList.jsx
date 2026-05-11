import React from "react";

const UserList = () => {
  const user = [
    { id: 1, name: "ayush" },
    { id: 2, name: "ayushi" },
    { id: 3, name: "ramesh" },
    { id: 4, name: "suresjh" },
    { id: 5, name: "mukesh" },
  ];

  return (
    <>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1> 
          </div>
        );
      })}
    </>
  );
};
export default UserList;
