import "./gamesList.css";
import { GameCard } from "../gameCard/gameCard";
import { useRawgService } from "../../services/rawgService";
import { useEffect, useState } from "react";

const GamesList = () => {
  const { loading, error, getAllGames } = useRawgService();
  const [games, setGames] = useState([]);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllGames().then(onGameListLoaded);
  };

  const onGameListLoaded = (newGames) => {
    setGames((games) => [...games, ...newGames]);
  };

  function renderGames(arr) {
    const items = arr.map((item, i) => {
      return (
        <li key={i}>
          <GameCard
            name={item.name}
            released={item.released}
            image={item.image}
          />
        </li>
      );
    });
    return <ul className="games-grid">{items}</ul>;
  }

  const eachGameCard = renderGames(games); //

  return (
    <div className="games-list">
      <div className="page-title">Best of the year</div>
      {eachGameCard}
    </div>
  );
};

export { GamesList };
