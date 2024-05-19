import React from "react";
import styles from "./Drawer.module.scss";
import CardDrawer from "../CardDrawer";

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

        {cartItems.length === 0 ? (
          <div
            className={`${styles.cartEmpty} d-flex align-center justify-center flex flex-column`}
          >
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.svg"
              alt="Empty Cart"
            />
            <h2>Cart is empty.</h2>
            <p className="opacity-6">
              Add at least one pair of sneakers to place ab order.
            </p>
            <button
              className={styles.greenButton}
              onClick={() => setIsOpenedCart(false)}
            >
              <img src="/img/arrow-right.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
