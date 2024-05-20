import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import AppContext from "./context";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get(
        "https://6646d17c51e227f23aafed62.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://6649c9264032b1331beececa.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://6646d17c51e227f23aafed62.mockapi.io/items"
      );
      setIsLoading(false)
      setCartItems(cartResponse.data)
      setFavoriteItems(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, []);

  const handleAddToCart = async (obj) => {
    const itemInCart = cartItems.find((item) => Number(item.id) === Number(obj.id));
    if (itemInCart) {
      await axios.delete(`https://6646d17c51e227f23aafed62.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      await axios.post("https://6646d17c51e227f23aafed62.mockapi.io/cart", obj)
      setCartItems(prev => [...prev, obj])
    }
  };


  const handleDeleteFromCart = async (id) => {
    try {
      await axios.delete(
        `https://6646d17c51e227f23aafed62.mockapi.io/cart/${id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleAddToFavorites = async (obj) => {
    const itemInFavorites = favoriteItems.find((favoriteItem) => Number(favoriteItem.id) === Number(obj.id))
    if (itemInFavorites) {
      await axios.delete(`https://6649c9264032b1331beececa.mockapi.io/favorites/${obj.id}`);
      setFavoriteItems((prev) => prev.filter((favoriteItem) => Number(favoriteItem.id) !== Number(obj.id)));
    } else {
      axios.post("https://6649c9264032b1331beececa.mockapi.io/favorites", obj);
      setFavoriteItems((prev) => [...prev, obj])
    }
  };

  const isInCart = (id) => cartItems.some(
    (cartItem) => Number(cartItem?.id) === Number(id)
  )

  return (
    <AppContext.Provider value={{ items, cartItems, favoriteItems, isLoading, setIsLoading, isInCart, handleAddToCart, handleAddToFavorites, setIsOpenedCart, setCartItems }}>
      <div className="wrapper clear">
        {isOpenedCart && (
          <Drawer
            setIsOpenedCart={setIsOpenedCart}
            cartItems={cartItems}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        )}
        <Header setIsOpenedCart={setIsOpenedCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleAddToCart={handleAddToCart}
                handleAddToFavorites={handleAddToFavorites}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
