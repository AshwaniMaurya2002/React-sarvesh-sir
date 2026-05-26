import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./ProductTask.module.css";

const ProductTask = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={styles.cardWrapper}
          >
            <Card product={product} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>
          CLOSE
        </button>

        <img src={product.images[0]} className={styles.popupImage} />

        <h2 className={styles.title}>{product.title}</h2>
        <h3 className={styles.price}>{product.price} Rs</h3>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductTask;
