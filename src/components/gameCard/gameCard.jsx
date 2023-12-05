import { motion } from "framer-motion";
import "./gameCard.css";

const GameCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="card"
    >
      <div className="card-image"></div>
      <div className="category"> Add to cart + </div>
      <div className="heading">
        A heading that must span over two lines
        <div className="author">
          By <span className="name">Abi</span> 4 days ago
        </div>
      </div>
    </motion.div>
  );
};

export { GameCard };
