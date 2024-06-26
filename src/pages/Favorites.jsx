import { useContext } from "react"
import CardMain from "../components/CardMain"
import AppContext from "../context"

const Favorites = () => {
  const { favoriteItems, handleAddToCart } = useContext(AppContext)

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
            handleAddToCart={handleAddToCart}
            isInFavorites={true}
          />
        ))}
      </div>
    </div>
  )
}
export default Favorites
