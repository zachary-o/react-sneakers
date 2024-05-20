import CardMain from "../components/CardMain";

const Orders = () => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders </h1>
      </div>

      <div className="mainItems">
        {[].map((item) => (
          <CardMain
          // key={item.id}
          // {...item}
          // onClickPlus
          // handleAddToCart={handleAddToCart}
          // handleAddToFavorites={handleAddToFavorites}
          // isInFavorites={true}
          />
        ))}
      </div>
    </div>
  );
};
export default Orders;
