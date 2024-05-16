import React from "react"
import styles from "./Drawer.module.scss"

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} p-30`}>
        {/* <div className="drawer p-30"> */}
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove button" />
        </h2>

        <div className={styles.cartItems}>
          {/* {`${styles.cartItem} d-flex align-center mb-20`} */}
          {/* <div className="cartItem d-flex align-center mb-20"> */}
          <div className={`${styles.cartItem} d-flex align-center mb-20`}>
            <div
              className={styles.cartItemImg}
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>469 USD</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove button"
            />
          </div>
        </div>

        <div className={styles.cartTotalBlock}>
          <ul>
            <li className="">
              <span>Total:</span>
              <div></div>
              <b>669 USD</b>
            </li>
            <li className="">
              <span>Tax 5%:</span>
              <div></div>
              <b>33.45 USD USD</b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Place an order <img src="/img/arrow-right.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
