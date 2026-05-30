import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setData(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);
  return (
    <div>
      <h1>fetch data</h1>
      <div>
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <h1>{ele.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchData;
