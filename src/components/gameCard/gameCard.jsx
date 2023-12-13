import "./gameCard.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameCard = ({
  name,
  released,
  image,
  id,
  rating,
  handleGetId,
  handleGetPrice,
}) => {
  function generatePriceBasedOnRating(rating) {
    const averagePrice = 4.99;
    const averageRating = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    for (let i = 0; i < averageRating.length; i++) {
      if (rating <= averageRating[i]) {
        return (averagePrice + i * 5).toFixed(2);
      }
    }
  }

  const gamePrice = generatePriceBasedOnRating(rating);

  return (
    <motion.div
      onClick={() => {
        handleGetId(id);
        handleGetPrice(gamePrice);
      }}
      id={id}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="card"
    >
      <Link to={"/games/game"}>
        <img src={image} className="card-image" alt="Game Image" />

        <div className="add-to-cart">
          <button className="add-cart-btn">Add to cart +</button>
          <p className="price">{gamePrice}$</p>
        </div>
        <div className="heading">
          {name}
          <div className="released">Released: {released}</div>
        </div>
      </Link>
    </motion.div>
  );
};

export { GameCard };
