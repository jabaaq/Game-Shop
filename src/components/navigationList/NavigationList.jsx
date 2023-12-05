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
        <Link to="/games" className="tip">
          <div className="card red">
            <RiGameFill />
            Games
          </div>
        </Link>
        <Link to="/games" className="tip">
          <div className="card blue">
            <FaStar />
            Last 30 days
          </div>
        </Link>
        <Link to="/games" className="tip">
          <div className="card green">
            <ImTrophy />
            Best of the year
          </div>
        </Link>
      </div>
    </div>
  );
};

export { NavigationList };
