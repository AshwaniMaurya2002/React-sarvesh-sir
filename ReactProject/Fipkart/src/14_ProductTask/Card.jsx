import React from "react";
import styles from "./Card.module.css";

const Card = ({ ele }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <img src={ele.images[0]} className={styles.productImage} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{ele.title}</h2>

        <p className={styles.description}>{ele.description}</p>

        <div className={styles.footer}>
          <h3 className={styles.price}>{ele.price} Rs</h3>

          <button className={styles.button}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
