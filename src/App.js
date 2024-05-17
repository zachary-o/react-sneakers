import { useEffect, useState } from "react"
import CardMain from "./components/CardMain"
import Drawer from "./components/Drawer"
import Header from "./components/Header"
import axios from "axios"

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isOpenedCart, setIsOpenedCart] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const fetchSneakers = async () => {
    try {
      const response = await axios.get(
        "https://6646d17c51e227f23aafed62.mockapi.io/items"
      )
      setItems(response?.data)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetchSneakers()
  }, [])

  const handleAddToCart = (data) => {
    const isItemInCart = cartItems.some(cartItem => cartItem.id === data.id)
    if (isItemInCart) {
      return
    }
    setCartItems(prev => [...prev, data])
  }

  const handleDeleteFromCart = (data) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== data.id)
    setCartItems(updatedCartItems)
  }


  return (
    <div className="wrapper clear">
      {isOpenedCart && (
        <Drawer setIsOpenedCart={setIsOpenedCart} cartItems={cartItems} handleDeleteFromCart={handleDeleteFromCart} />
      )}
      <Header setIsOpenedCart={setIsOpenedCart} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Search Results for: ${searchValue}` : "All Sneakers"}</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear search input"
              onClick={() => setSearchValue("")}
            />}
            <input placeholder="Search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
          </div>
        </div>

        <div className="mainItems">
          {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
            <CardMain
              key={item.id}
              {...item}
              onClickPlus
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
