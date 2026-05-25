import React from "react";
import styles from "./Card.module.css";

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.heart}>♡</div>
        <img
          src={product.images?.[0] || product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{product.title}</h2>

        <div className={styles.tags}>
          <span className={styles.tag}>⭐ {product.rating}</span>
          <span className={styles.tag}>{product.category}</span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div>
            <p className={styles.priceLabel}>Price</p>
            <h3 className={styles.price}>${product.price}</h3>
          </div>

          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation(); // Prevent opening popup when clicking button
              alert("Added to cart!");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
