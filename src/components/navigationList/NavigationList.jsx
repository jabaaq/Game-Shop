import "./NavigationList.css";
import { RiGameFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

import { Link } from "react-router-dom";
import { GetUrl } from "../getUrl/getUrl";

const NavigationList = ({ onSidebarMenuClick }) => {
  const { random, allTimeTop, last30Days } = GetUrl();

  return (
    <div className="cards">
      <h2>Quick Navigation</h2>
      <div className="list-items">
        <Link
          to="/games"
          className="tip"
          onClick={() => onSidebarMenuClick("Random", random)}
        >
          <div className="card red">
            <RiGameFill />
            Games
          </div>
        </Link>
        <Link
          to="/games"
          className="tip"
          onClick={() => onSidebarMenuClick("Last 30 days", last30Days)}
        >
          <div className="card blue">
            <FaStar />
            Last 30 days
          </div>
        </Link>
        <Link
          to="/games"
          className="tip"
          onClick={() => onSidebarMenuClick("All time top", allTimeTop)}
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
