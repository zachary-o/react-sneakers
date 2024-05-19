import React, { useState } from "react";
import styles from "./CardMain.module.scss";

const CardMain = ({
  id,
  name,
  price,
  imageUrl,
  handleAddToCart,
  handleAddToFavorites,
  isInFavorites = false,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isInFavorites);

  const handlePlusClick = () => {
    handleAddToCart({ id, name, price, imageUrl });
    setIsAdded(true);
  };

  const handleHeartClick = () => {
    handleAddToFavorites({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-red.svg" : "/img/heart-gray.svg"}
          alt="Unliked"
          onClick={handleHeartClick}
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} USD</b>
        </div>

        <img
          className={styles.button}
          onClick={handlePlusClick}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
};

export default CardMain;
