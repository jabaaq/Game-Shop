import "./gamesList.css";
import { GameCard } from "../gameCard/gameCard";
import { Spinner } from "../spinner/spinner";
import { RawgService } from "../../services/rawgService";
import { useEffect, useState } from "react";
import { GetUrl } from "../getUrl/getUrl";

const GamesList = ({ pageTitle, selectedApi }) => {
  const { loading, error, getAllGames } = RawgService();
  const { allTimeTop } = GetUrl();
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames([]);
    onRequest();
  }, [selectedApi]);

  const onRequest = () => {
    getAllGames(selectedApi).then(onGameListLoaded);
  };

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
      <div className="page-title">
        {pageTitle === null ? "Random" : pageTitle}
      </div>

      {eachGameCard}
      {spinner}
    </div>
  );
};

export { GamesList };
