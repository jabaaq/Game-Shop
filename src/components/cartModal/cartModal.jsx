import "./cartModal.css";

const CartModal = () => {
  return (
    <div className="modal show">
      <div className="modal-box">
        <div className="modal-content">
          <div className="modal-games-grid"></div>
          <div className="payment-information"></div>
        </div>
      </div>
    </div>
  );
};

export { CartModal };
