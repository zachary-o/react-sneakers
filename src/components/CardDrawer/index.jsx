import React from "react";
import styles from "./CardDrawer.module.scss";

const CardDrawer = ({ id, name, price, imageUrl, handleDeleteFromCart }) => {
  return (
    <div className={`${styles.cartItem} d-flex align-center mb-20`}>
      <div
        className={styles.cartItemImg}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">{name}</p>
        <b>{price} USD</b>
      </div>
      <img
        className={styles.removeBtn}
        src="/img/btn-remove.svg"
        alt="Remove button"
        onClick={() => handleDeleteFromCart(id)}
      />
    </div>
  );
};

export default CardDrawer;
