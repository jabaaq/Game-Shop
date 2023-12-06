import { motion } from "framer-motion";
import "./gameCard.css";

const GameCard = ({ name, released, image, id }) => {
  function getRandomNumber() {
    const arr = [14.99, 19.98, 44.98, 12.98, 2.98, 17.98, 10.98, 9.99, 15.99];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const randomNum = getRandomNumber();

  return (
    <motion.div
      id={id}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="card"
    >
      <img src={image} className="card-image" alt="Game Image" />

      <div className="add-to-cart">
        <button className="add-cart-btn">Add to cart +</button>
        <p className="price">{randomNum}$</p>
      </div>
      <div className="heading">
        {name}
        <div className="released">Released: {released}</div>
      </div>
    </motion.div>
  );
};

export { GameCard };
