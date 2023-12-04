import "./NavigationList.css";
import { RiGameFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

const NavigationList = () => {
  return (
    <div className="cards">
      <h2>Quick Navigation</h2>
      <div className="list-items">
        <div className="card red">
          <p className="tip">
            <RiGameFill />
            Games
          </p>
        </div>
        <div className="card blue">
          <p className="tip">
            <FaStar />
            Last 30 days
          </p>
        </div>
        <div className="card green">
          <p className="tip">
            <ImTrophy />
            Best of the year
          </p>
        </div>
      </div>
    </div>
  );
};

export { NavigationList };
