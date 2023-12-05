import "./gamesList.css";
import { GameCard } from "../gameCard/gameCard";

const GamesList = () => {
  return (
    <div className="games-list">
      <div className="page-title">Best of the year</div>
      <ul className="games-grid">
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
        <li>
          <GameCard />
        </li>
      </ul>
    </div>
  );
};

export { GamesList };
