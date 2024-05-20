import { useContext } from "react";
import AppContext from "../context";

const useTotalPrice = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

  return { totalPrice, cartItems, setCartItems };
};
export default useTotalPrice;
