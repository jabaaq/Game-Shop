import { motion } from "framer-motion";
import "./gameCard.css";

const GameCard = ({ name, released, image }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="card"
    >
      <img src={image} className="card-image" alt="Game Image" />

      <div className="add-to-cart">
        <button className="add-cart-btn">Add to cart +</button>
        <p className="price">19.99$</p>
      </div>
      <div className="heading">
        {name}
        <div className="released">Released: {released}</div>
      </div>
    </motion.div>
  );
};

export { GameCard };
