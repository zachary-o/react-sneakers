import React, { useState } from "react"
import styles from "./CardMain.module.scss"

const CardMain = ({ id, name, price, imageUrl, handleAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handlePlusClick = () => {
    handleAddToCart({ id, name, price, imageUrl })
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-gray.svg" alt="Unliked" />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Sneakers picture" />
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
  )
}

export default CardMain
