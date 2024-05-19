import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchSneakers = async () => {
    try {
      const response = await axios.get(
        "https://6646d17c51e227f23aafed62.mockapi.io/items"
      );
      setItems(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "https://6646d17c51e227f23aafed62.mockapi.io/cart"
      );
      setCartItems(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        "https://6649c9264032b1331beececa.mockapi.io/favorites"
      );
      setFavoriteItems(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchSneakers();
    fetchCartItems();
    fetchFavorites();
  }, []);

  const handleAddToCart = async (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      try {
        await axios.delete(
          `https://6646d17c51e227f23aafed62.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((cartItem) => cartItem.id !== obj.id)
        );
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        const { data } = await axios.post(
          "https://6646d17c51e227f23aafed62.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      } catch (error) {
        console.log("error", error);
      }
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
    if (favoriteItems.find((favoriteItem) => favoriteItem.id === obj.id)) {
      try {
        await axios.delete(
          `https://6649c9264032b1331beececa.mockapi.io/favorites/${obj.id}`
        );
        setFavoriteItems((prev) =>
          prev.filter((favoriteItem) => favoriteItem !== obj.id)
        );
        fetchFavorites();
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        const { data } = await axios.post(
          "https://6649c9264032b1331beececa.mockapi.io/favorites",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
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
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteItems={favoriteItems}
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
              isInFavorites={true}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
