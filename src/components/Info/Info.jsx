import React, { useContext } from "react"
import styles from "./Info.module.scss"
import AppContext from "../../context"

const Info = ({ title, image, description }) => {
  const { setIsOpenedCart } = useContext(AppContext)

  return (
    <div
      className={`${styles.cartEmpty} d-flex align-center justify-center flex flex-column`}
    >
      <img className="mb-20" width={120} src={image} alt="Empty Cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button
        className={styles.greenButton}
        onClick={() => setIsOpenedCart(false)}
      >
        <img src="img/arrow-right.svg" alt="Arrow" />
        Go back
      </button>
    </div>
  )
}

export default Info
