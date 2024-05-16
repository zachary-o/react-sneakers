import React from "react"
import styles from "./CarMain.module.scss"

const CardMain = ({ name, price, imageUrl }) => {
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
          height={11}
          width={11}
          src="/img/btn-plus.svg"
          alt="Add"
        />
      </div>
    </div>
  )
}

export default CardMain
