import "./cartItem.css";
import { IoClose } from "react-icons/io5";
import exampleImg from "../../../assets/img/example.jpg";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img src={exampleImg} className="cart-game-image" alt="Example" />
      </div>
      <div className="info-container">
        <button className="exit-button">
          <IoClose size={30} />
        </button>
        <div className="game-name">Grand theft auto 5 </div>
        <div className="added-game-price">29.99$</div>
      </div>
    </div>
  );
};

export { CartItem };
