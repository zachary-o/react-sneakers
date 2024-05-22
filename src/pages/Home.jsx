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

  const filteredItems = items?.filter((item) =>
    item?.name.toLowerCase().includes(searchValue?.toLowerCase())
  )

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

      <div className="mainItems">
        {(isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
          <CardMain
            key={item?.id || index}
            {...item}
            handleAddToCart={handleAddToCart}
            handleAddToFavorites={handleAddToFavorites}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
