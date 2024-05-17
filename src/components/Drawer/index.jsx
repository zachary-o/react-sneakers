import React from "react"
import styles from "./Drawer.module.scss"
import CardDrawer from "../CardDrawer"

const Drawer = ({ setIsOpenedCart, handleDeleteFromCart, cartItems = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} p-30`}>
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close Cart"
            onClick={() => setIsOpenedCart(false)}
          />
        </h2>

        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CardDrawer
              key={item.id}
              {...item}
              handleDeleteFromCart={handleDeleteFromCart}
            />
          ))}
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
