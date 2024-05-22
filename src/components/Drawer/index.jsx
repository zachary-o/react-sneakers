import axios from "axios"
import React, { useContext, useState } from "react"
import AppContext from "../../context"
import useTotalPrice from "../../hooks/useTotalPrice"
import CardDrawer from "../CardDrawer"
import Info from "../Info/Info"
import styles from "./Drawer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({ isOpenedCart }) => {
  const { cartItems, setCartItems, totalPrice } = useTotalPrice()
  const { isLoading, setIsLoading, setIsOpenedCart, handleDeleteFromCart } =
    useContext(AppContext)
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplete, setOrderComplete] = useState(false)

  const handleOrderComplete = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        "https://6649c9264032b1331beececa.mockapi.io/orders",
        { items: cartItems }
      )

      setOrderId(data.id)
      setOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          "https://6646d17c51e227f23aafed62.mockapi.io/cart/" + item.id
        )
        await delay(1000)
      }
    } catch (error) {
      console.log("error", error)
    }
    setIsLoading(false)
  }

  return (
    <div
      className={`${styles.overlay} ${
        isOpenedCart ? styles.overlayVisible : ""
      }`}
    >
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
          <Info
            title={isOrderComplete ? "Order Completed!" : "Cart is empty."}
            image={
              isOrderComplete
                ? "/img/completed-order.svg"
                : "/img/empty-cart.svg"
            }
            description={
              isOrderComplete
                ? `Your order #${orderId} will soon be transferred to courier delivery`
                : "Add at least one pair of sneakers to place ab order."
            }
          />
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
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} USD</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{((totalPrice / 100) * 5).toFixed(2)} USD</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className={styles.greenButton}
                onClick={handleOrderComplete}
              >
                Place an order <img src="/img/arrow-right.svg" alt="Arrow" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Drawer
