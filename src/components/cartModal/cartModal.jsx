import "./cartModal.css";
import { CartItem } from "./cartItem/cartItem";

const CartModal = () => {
  return (
    <div className="modal show">
      <div className="modal-box">
        <div className="modal-box-inner">
          <div className="modal-content">
            <header className="total-games">
              <h2 className="modal-game-count">3 Games</h2>
            </header>
            <main className="modal-games-grid">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
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
