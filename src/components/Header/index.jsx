import React from "react"

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>469 USD</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/profile.svg" />
        </li>
      </ul>
    </header>
  )
}

export default Header
