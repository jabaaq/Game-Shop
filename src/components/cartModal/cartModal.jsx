import "./cartModal.css";
import { CartItem } from "./cartItem/cartItem";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const CartModal = ({
  modalStatus,
  handleModalStatus,
  addedCartGames,
  setAddedCartGames,
  handleGetId,
  handleGetPrice,
}) => {
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
    return acc + Number(curr.price);
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
            <div className="modal-header-content">
              <button
                className="close-modal-btn"
                onClick={() => {
                  handleModalStatus(false);
                }}
              >
                <IoClose size={50} />
              </button>
              <header className="total-games">
                <button
                  className="clear-cart-btn"
                  onClick={() => {
                    setAddedCartGames([]);
                  }}
                >
                  Clear
                </button>
                <h2 className="modal-game-count">
                  {addedCartGames.length} Games
                </h2>
              </header>
            </div>
            <main className="modal-games-grid">
              {addedCartGames.map((item, i) => (
                <CartItem
                  key={i}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  index={i}
                  addedCartGames={addedCartGames}
                  setAddedCartGames={setAddedCartGames}
                  handleGetId={handleGetId}
                  handleModalStatus={handleModalStatus}
                  handleGetPrice={handleGetPrice}
                />
              ))}
            </main>
            <footer className="payment-information">
              <p className="total-price">Total: {totalNum.toFixed(2)}$</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartModal };
