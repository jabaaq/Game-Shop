import "./gamesList.css";
import { GameCard } from "../gameCard/gameCard";
import { Spinner } from "../spinner/spinner";
import { RawgService } from "../../services/rawgService";
import { useEffect, useState } from "react";
const GamesList = ({ pageTitle, selectedApi }) => {
  const { loading, error, getAllGames } = RawgService();
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames([]);

    if (selectedApi) {
      onRequest();
    }
  }, [selectedApi]);

  const onRequest = () => {
    getAllGames(selectedApi).then(onGameListLoaded);
  };

  useEffect(() => {
    const lastSelectedGames = localStorage.getItem("savedGames");
    if (lastSelectedGames) {
      getAllGames(JSON.parse(lastSelectedGames)).then(onGameListLoaded);
    }
  }, [pageTitle]);

  const onGameListLoaded = (newGames) => {
    setGames(() => [...newGames]);
  };

  function renderGames(arr) {
    const items = arr.map((item, i) => {
      return (
        <li key={i}>
          <GameCard
            name={item.name}
            released={item.released}
            image={item.image}
            id={item.id}
            rating={item.rating}
          />
        </li>
      );
    });
    return <ul className="games-grid">{items}</ul>;
  }

  const eachGameCard = renderGames(games);
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="games-list">
      <div className="page-title">{pageTitle}</div>
      {eachGameCard}
      {spinner}
    </div>
  );
};

export { GamesList };
