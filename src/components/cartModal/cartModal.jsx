import "./cartModal.css";
import { CartItem } from "./cartItem/cartItem";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { motion } from "framer-motion";

const CartModal = ({ modalStatus, handleModalStatus, addedCartGames }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleModalStatus(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //To calculate the total price of the games added to the cart
  const totalNum = addedCartGames.reduce((acc, curr) => {
    return acc + +curr.price;
  }, 0);

  return (
    <div
      className={`modal ${modalStatus ? "show" : "hide"}`}
      onClick={(e) => {
        if (e.target.className === "modal show") handleModalStatus(false);
      }}
    >
      <div className="modal-box">
        <div className="modal-box-inner">
          <div className="modal-content">
            <button
              className="close-modal-btn"
              onClick={() => {
                handleModalStatus(false);
              }}
            >
              <IoClose size={30} />
            </button>
            <header className="total-games">
              <h2 className="modal-game-count">
                {addedCartGames.length} Games
              </h2>
            </header>
            <main className="modal-games-grid">
              {addedCartGames.map((item, i) => (
                <CartItem
                  key={i}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </main>
            <footer className="payment-information">
              <p className="total-price">Total: {totalNum}$</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartModal };
