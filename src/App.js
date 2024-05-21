import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import AppContext from "./context";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([axios.get(
          "https://6646d17c51e227f23aafed62.mockapi.io/cart"
        ), axios.get(
          "https://6649c9264032b1331beececa.mockapi.io/favorites"
        ), axios.get(
          "https://6646d17c51e227f23aafed62.mockapi.io/items"
        )])

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData();
  }, []);

  const handleAddToCart = async (obj) => {
    const itemInCart = cartItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    try {
      if (itemInCart) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6646d17c51e227f23aafed62.mockapi.io/cart/${itemInCart.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://6646d17c51e227f23aafed62.mockapi.io/cart", obj);
        setCartItems(prev => prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }))
      }
    } catch (error) {
      console.log('error', error)
    }
  };

  const handleDeleteFromCart = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      await axios.delete(
        `https://6646d17c51e227f23aafed62.mockapi.io/cart/${id}`
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleAddToFavorites = async (obj) => {
    const itemInFavorites = favoriteItems.find(
      (favoriteItem) => Number(favoriteItem.parentId) === Number(obj.id)
    );
    try {
      if (itemInFavorites) {
        setFavoriteItems((prev) =>
          prev.filter(
            (favoriteItem) => Number(favoriteItem.id) !== Number(obj.id)
          )
        );
        await axios.delete(
          `https://6649c9264032b1331beececa.mockapi.io/favorites/${obj.id}`
        );
      } else {
        setFavoriteItems((prev) => [...prev, obj]);
        axios.post("https://6649c9264032b1331beececa.mockapi.io/favorites", obj);
      }
    } catch (error) {
      console.log('error', error)
    }
  };

  const isInCart = (id) => cartItems.some((cartItem) => Number(cartItem?.parentId) === Number(id));
  const isInFavorites = (id) => favoriteItems.some(favoriteItem => Number(favoriteItem?.parentId === Number(id)))

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        searchValue,
        isLoading,
        setSearchValue,
        setIsLoading,
        isInCart,
        isInFavorites,
        handleAddToCart,
        handleAddToFavorites,
        handleDeleteFromCart,
        setIsOpenedCart,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer isOpenedCart={isOpenedCart} />
        <Header setIsOpenedCart={setIsOpenedCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
