import "./cartItem.css";
import { IoClose } from "react-icons/io5";
import exampleImg from "../../../assets/img/example.jpg";

const CartItem = ({ name, image, price }) => {
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
        <button className="exit-button">
          <IoClose size={30} />
        </button>
        <div className="game-name">G{name}</div>
        <div className="added-game-price">{price}$</div>
      </div>
    </div>
  );
};

export { CartItem };
