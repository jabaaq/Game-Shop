import "./searchBar-item.css";

const SearchBarItem = ({ name, backgroundImage, id }) => {
  return (
    <a href="#" className="searchBar-item-box" id={id}>
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
