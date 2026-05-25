import React, { useEffect, useState } from "react";

const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getProduct(params) {
      try {
        let resp = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        let data = await resp.json();
        console.log(data);
        setItem(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Product</h1>
      <div></div>
    </>
  );
};

export default Products;
