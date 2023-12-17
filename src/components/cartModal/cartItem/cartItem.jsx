import { useEffect, useState } from "react";
import "./cartItem.css";
import { IoClose } from "react-icons/io5";

const CartItem = ({
  name,
  image,
  price,
  id,
  addedCartGames,
  setAddedCartGames,
}) => {
  // Filter out the selected game from the cart
  const removeFromCart = () => {
    const updatedCart = addedCartGames.filter((game) => game.id !== id);
    setAddedCartGames(updatedCart);
  };

  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img
          src={image}
          className="cart-game-image"
          alt="Game background image"
        />
      </div>
      <div className="info-container">
        <button className="exit-button" onClick={removeFromCart}>
          <IoClose size={30} />
        </button>
        <div className="game-name">{name}</div>
        <div className="added-game-price">{price}$</div>
      </div>
    </div>
  );
};

export { CartItem };
