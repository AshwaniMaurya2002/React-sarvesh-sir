import React, { useEffect, useState } from "react";
import Card from "./Card";

const ProductTask = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json();

        console.log(data);

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <h1>Products Page</h1>

      {products.map((ele) => (
        <Card key={ele.id} ele={ele} />
      ))}
    </>
  );
};

export default ProductTask;
