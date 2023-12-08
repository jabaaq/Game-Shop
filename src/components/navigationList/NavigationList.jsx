import "./NavigationList.css";
import { RiGameFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

import { Link } from "react-router-dom";
import { GetUrl } from "../getUrl/getUrl";

const NavigationList = ({ handleLoadedGames }) => {
  const { random, last30Days, allTimeTop } = GetUrl();

  return (
    <div className="cards">
      <h2>Quick Navigation</h2>
      <div className="list-items">
        <Link
          to="/games"
          className="tip"
          onClick={() => handleLoadedGames(random)}
        >
          <div className="card red">
            <RiGameFill />
            Games
          </div>
        </Link>
        <Link
          to="/games"
          className="tip"
          onClick={() => handleLoadedGames(last30Days)}
        >
          <div className="card blue">
            <FaStar />
            Last 30 days
          </div>
        </Link>
        <Link
          to="/games"
          className="tip"
          onClick={() => handleLoadedGames(allTimeTop)}
        >
          <div className="card green">
            <ImTrophy />
            All time top
          </div>
        </Link>
      </div>
    </div>
  );
};

export { NavigationList };
