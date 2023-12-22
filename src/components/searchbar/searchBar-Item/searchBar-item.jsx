import "./searchBar-item.css";
import { Link } from "react-router-dom";

const SearchBarItem = ({ name, backgroundImage, id, handleGetId }) => {
  return (
    <Link
      to={`/games/game/${id}`}
      className="searchBar-item-box"
      onClick={() => {
        handleGetId(id);
      }}
    >
      <img
        src={backgroundImage}
        className="searched-game-item-img"
        alt="Game background"
      />
      <h4>{name}</h4>
    </Link>
  );
};

export { SearchBarItem };
