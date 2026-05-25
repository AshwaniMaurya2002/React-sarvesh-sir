import React from "react";
import styles from "./Card.module.css";

const Card = ({ ele }) => {
  return (
    <div className={styles.card}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Heart */}
        <div className={styles.heart}>♡</div>

        {/* Product Image */}
        <img src={image} alt={title} className={styles.productImage} />
      </div>

      {/* Bottom Section */}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        {/* Tags */}
        <div className={styles.tags}>
          <span className={styles.tag}>{size}</span>
          <span className={styles.tag}>{color}</span>
        </div>

        {/* Description */}
        <p className={styles.description}>{description}</p>

        {/* Footer */}
        <div className={styles.footer}>
          <div>
            <p className={styles.priceLabel}>Price</p>
            <h3 className={styles.price}>${price}</h3>
          </div>

          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
