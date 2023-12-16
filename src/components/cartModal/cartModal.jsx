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

  useEffect(() => {
    console.log(addedCartGames);
  }, [addedCartGames]);

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
              <h2 className="modal-game-count">3 Games</h2>
            </header>
            <main className="modal-games-grid">
              {addedCartGames.map((item, i) => (
                <CartItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  key={i}
                />
              ))}
            </main>
            <footer className="payment-information">
              <p className="total-price">Total: $ 78.99</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartModal };
