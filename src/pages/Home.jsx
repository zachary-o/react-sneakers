import { useContext } from "react"
import CardMain from "../components/CardMain"
import AppContext from "../context"

const Home = () => {
  const {
    items,
    handleAddToCart,
    handleAddToFavorites,
    isLoading,
    searchValue,
    setSearchValue,
  } = useContext(AppContext)

  const renderItems = () => {
    const filtredItems = items?.filter((item) =>
      item?.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
    return (isLoading ? [...Array(8)] : filtredItems).map((item) => (
      <CardMain
        key={item?.id}
        {...item}
        handleAddToCart={handleAddToCart}
        handleAddToFavorites={handleAddToFavorites}
        isLoading={isLoading}
      />
    ))
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Search Results for: ${searchValue}` : "All Sneakers"}
        </h1>
        <div className="searchBlock d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear search input"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            placeholder="Search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>

      <div className="mainItems">{renderItems()}</div>
    </div>
  )
}
export default Home
