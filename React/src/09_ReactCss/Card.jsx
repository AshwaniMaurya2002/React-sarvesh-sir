import React from "react";
import style from "./Card.module.css";

const Card = () => {
  return (
    //here we have to use like this and use camel case
    <section id={style.cardContainer}>
      <div className={style.userImage}>👤</div>
      <h1>John doe</h1>
      <p className={style.desig}>Frontend developer</p>
      <p className={style.about}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quo
        exercitationem expedita itaque eum deleniti molestias vero rem.
      </p>
      <button className={style.btn}>Hire Me</button>
    </section>
  );
};

export default Card;
