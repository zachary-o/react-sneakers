import CardMain from "../components/CardMain";

const Favorites = ({
  favoriteItems,
  handleAddToCart,
  handleAddToFavorites,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites </h1>
      </div>

      <div className="mainItems">
        {favoriteItems.map((item) => (
          <CardMain
            key={item.id}
            {...item}
            onClickPlus
            handleAddToCart={handleAddToCart}
            handleAddToFavorites={handleAddToFavorites}
            isInFavorites={true}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
