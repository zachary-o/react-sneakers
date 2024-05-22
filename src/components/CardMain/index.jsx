import React, { useContext, useState } from "react"
import ContentLoader from "react-content-loader"
import AppContext from "../../context"
import styles from "./CardMain.module.scss"

const CardMain = ({
  id,
  name,
  price,
  imageUrl,
  handleAddToCart,
  handleAddToFavorites,
  isLoading,
}) => {
  const { isInCart, isInFavorites } = useContext(AppContext)

  const payload = { id, parentId: id, name, price, imageUrl }

  const handlePlusClick = () => {
    handleAddToCart(payload)
  }

  const handleHeartClick = () => {
    handleAddToFavorites(payload)
  }

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={190.5}
          height={284}
          viewBox="0 0 190.5 284"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="102" y="63" rx="0" ry="0" width="23" height="1" />
          <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="114" height="15" />
          <rect x="0" y="171" rx="5" ry="5" width="80" height="25" />
          <rect x="119" y="165" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {handleAddToFavorites && (
            <div className={styles.favorite}>
              <img
                src={
                  isInFavorites(id) ? "img/heart-red.svg" : "img/heart-gray.svg"
                }
                alt={isInFavorites(id) ? "Liked" : "Unliked"}
                onClick={handleHeartClick}
              />
            </div>
          )}

          <img width={133} height={112} src={imageUrl} alt={name} />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} USD</b>
            </div>

            {handleAddToCart && (
              <img
                className={styles.button}
                onClick={handlePlusClick}
                src={isInCart(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"}
                alt={isInCart(id) ? "Added to cart" : "Add to cart"}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CardMain
