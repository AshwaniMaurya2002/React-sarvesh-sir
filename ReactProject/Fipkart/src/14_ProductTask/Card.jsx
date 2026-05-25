import React from "react";
import styles from "./Card.module.css";

const Card = ({ ele }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div className={styles.heart}>💖</div>
        <img
          src={ele.images[0]}
          alt={ele.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{ele.title}</h2>

        <div className={styles.tags}>
          <span className={styles.tag}>⭐ {ele.rating}</span>
          <span className={styles.tag}>{ele.category}</span>
        </div>

        <p className={styles.description}>{ele.description}</p>

        <div className={styles.footer}>
          <div>
            <p className={styles.priceLabel}>Price</p>
            <h3 className={styles.price}>${ele.price}</h3>
          </div>

          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
