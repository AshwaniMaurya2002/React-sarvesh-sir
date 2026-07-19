import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const ProductTask = () => {
  const [data, setData] = useState([]);

  async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    setData(data.products);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map((data) => {
        <Card data={data} />;
      })}
    </>
  );
};

export default ProductTask;
