import "./NavigationList.css";
import { RiGameFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { ImTrophy } from "react-icons/im";

import { Link } from "react-router-dom";
import { GetUrl } from "../getUrl/getUrl";
import { useEffect } from "react";

const NavigationList = ({}) => {
  const { random, allTimeTop, last30Days } = GetUrl();
  const navigationListButtons = [
    {
      name: "Game",
      icon: <RiGameFill />,
      className: "card red",
      title: "Random",
      api: random,
    },
    {
      name: "Last 30 days",
      icon: <FaStar />,
      className: " card blue",
      title: "Last 30 days",
      api: last30Days,
    },
    {
      name: "All time top",
      icon: <ImTrophy />,
      className: "card green",
      title: "All time top",
      api: allTimeTop,
    },
  ];

  const onNavigationButtonClick = (selectedMenu, selectedApi) => {
    localStorage.setItem("savedMenu", selectedMenu);
    localStorage.setItem("savedGames", JSON.stringify(selectedApi));
  };

  return (
    <div className="cards">
      <h2>Quick Navigation</h2>
      <div className="list-items">
        {navigationListButtons.map((item, i) => (
          <Link
            to="/games"
            key={i}
            className="tip"
            onClick={() => onNavigationButtonClick(item.title, item.api)}
          >
            <div className={item.className}>
              {item.icon}
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { NavigationList };
