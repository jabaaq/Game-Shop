import "./NavigationList.css";
import { RiGameFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

import { Link } from "react-router-dom";

const NavigationList = () => {
  return (
    <div className="cards">
      <h2>Quick Navigation</h2>
      <div className="list-items">
        <div className="card red">
          <Link to="/games" className="tip">
            <RiGameFill />
            Games
          </Link>
        </div>
        <div className="card blue">
          <Link to="/games" className="tip">
            <FaStar />
            Last 30 days
          </Link>
        </div>
        <div className="card green">
          <Link to="/games" className="tip">
            <ImTrophy />
            Best of the year
          </Link>
        </div>
      </div>
    </div>
  );
};

export { NavigationList };
