import "./cartItem.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartItem = ({
  name,
  image,
  price,
  id,
  addedCartGames,
  setAddedCartGames,
  handleGetId,
  handleModalStatus,
  setSelectedGameId,
}) => {
  // Filter out the selected game from the cart
  const removeFromCart = () => {
    const updatedCart = addedCartGames.filter((game) => game.id !== id);
    setAddedCartGames(updatedCart);
  };

  return (
    <Link
      to={"/games/game"}
      className="cart-item-container"
      onClick={() => {
        handleGetId(id);
        handleModalStatus(false);
      }}
    >
      <div className="image-container">
        <img
          src={image}
          className="cart-game-image"
          alt="Game background image"
        />
      </div>
      <div className="info-container">
        <div className="game-name">{name}</div>
        <div className="added-game-price">{price}$</div>
      </div>
      <button className="exit-button" onClick={removeFromCart}>
        <IoClose size={30} />
      </button>
    </Link>
  );
};

export { CartItem };
