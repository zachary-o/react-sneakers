import CardMain from "../components/CardMain";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  handleAddToCart,
  handleAddToFavorites,
}) => {
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
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <CardMain
              key={item.id}
              {...item}
              onClickPlus
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
