import "./gameCard.css";

const GameCard = () => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="category"> Add to cart + </div>
      <div className="heading">
        A heading that must span over two lines
        <div className="author">
          By <span className="name">Abi</span> 4 days ago
        </div>
      </div>
    </div>
  );
};

export { GameCard };
