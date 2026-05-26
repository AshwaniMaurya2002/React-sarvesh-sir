import React from "react";
import styles from "./Card.module.css";

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.images[0]} className={styles.productImage} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.meta}>
          <span className={styles.rating}> {product.rating}</span>
          <span className={styles.category}>{product.category}</span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div>
            <p className={styles.price}>{product.price} Rs</p>
          </div>
          <button className={styles.addBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
