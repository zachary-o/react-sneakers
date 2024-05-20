import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import useTotalPrice from "../../hooks/useTotalPrice";

const Header = () => {
  const { totalPrice } = useTotalPrice();
  const { setIsOpenedCart } = useContext(AppContext);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={() => setIsOpenedCart(true)}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>{totalPrice} USD</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/favorite.svg"
              alt="Favorites"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              className="cu-p"
              width={18}
              height={18}
              src="/img/profile.svg"
              alt="Profile"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
