import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";

const ProductTask = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  if (selectedProduct) {
    return (
      <div className={styles.popupPage}>
        <div className={styles.popupContent}>
          <button
            className={styles.backBtn}
            onClick={() => setSelectedProduct(null)}
          >
            ❌
          </button>

          <div className={styles.left}>
            <img
              src={selectedProduct.images[0]}
              className={styles.popupImage}
            />
          </div>

          <div className={styles.right}>
            <h1 className={styles.popupTitle}>{selectedProduct.title}</h1>

            <h2 className={styles.popupPrice}>{selectedProduct.price} Rs</h2>

            <p className={styles.popupDescription}>
              {selectedProduct.description}
            </p>

            <button className={styles.popupButton}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {products.map((ele) => (
        <div key={ele.id} onClick={() => setSelectedProduct(ele)}>
          <Card ele={ele} />
        </div>
      ))}
    </div>
  );
};

export default ProductTask;
