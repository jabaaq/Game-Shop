import "./searchBar-item.css";
import { Link } from "react-router-dom";

const SearchBarItem = ({ name, backgroundImage, id }) => {
  return (
    <a
      to={"/games/game"}
      className="searchBar-item-box"
      id={id}
      onClick={() => {
        console.log(id);
      }}
    >
      <img
        src={backgroundImage}
        className="searched-game-item-img"
        alt="Game background"
      />
      <h4>{name}</h4>
    </a>
  );
};

export { SearchBarItem };
