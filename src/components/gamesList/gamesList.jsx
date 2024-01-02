import "./gamesList.css";
import { GameCard } from "../gameCard/gameCard";
import { Spinner } from "../spinner/spinner";
import { RawgService } from "../../services/rawgService";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../errorMessage/errorMessage";

const GamesList = ({
  handleGetId,
  handleGetPrice,
  handleAddCartGames,
  addedCartGames,
  selectedGameList,
}) => {
  const { loading, error, getAllGames, process, setProcess } = RawgService();
  const [games, setGames] = useState([]);
  useEffect(() => {
    setGames([]);

    if (selectedGameList.api) {
      onRequest();
    }
  }, [selectedGameList.api]);

  const onRequest = () => {
    if (selectedGameList.api) {
      getAllGames(selectedGameList.api).then(onGameListLoaded);
    }
  };

  useEffect(() => {
    const lastSelectedGames = localStorage.getItem("savedGames");
    if (lastSelectedGames) {
      getAllGames(JSON.parse(lastSelectedGames)).then(onGameListLoaded);
    }
  }, []);

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
            handleGetId={handleGetId}
            handleGetPrice={handleGetPrice}
            handleAddCartGames={handleAddCartGames}
            addedCartGames={addedCartGames}
          />
        </li>
      );
    });
    return <ul className="games-grid">{items}</ul>;
  }

  const setContent = (process, list) => {
    switch (process) {
      case "waiting":
        return null;
        break;
      case "loading":
        return <Spinner />;
        break;
      case "confirmed":
        return renderGames(list);
        break;
      case "error":
        return <ErrorMessage />;
        break;
      default:
        throw new Error("Unexpected process state");
    }
  };

  return (
    <div className="games-list">
      <div className={`page-title`}>{selectedGameList.title}</div>
      {setContent(process, games)}
    </div>
  );
};

export { GamesList };
