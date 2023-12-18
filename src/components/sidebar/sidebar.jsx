import "./sidebar.css";
import { GetUrl } from "../getUrl/getUrl";
import { FaStar } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { motion } from "framer-motion";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidMedal } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { useState, useEffect, useRef } from "react";

const SidebarMenu = ({ onSidebarMenuClick }) => {
  const { popular2022, bestOfTheYear, last30Days, allTimeTop, random, soon } =
    GetUrl();

  return (
    <aside id="sidebar">
      <div className="each-section">
        <IconBox
          h3={"Games"}
          name={"Random"}
          icon={<GiPerspectiveDiceSixFacesRandom size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={random}
        />
        <IconBox
          h3={"New Releases"}
          name={"Last 30 days"}
          icon={<FaStar size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={last30Days}
        />
        <IconBox
          name={"Soon"}
          icon={<TbPlayerTrackNextFilled size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={soon}
        />
        <IconBox
          h3={"Top"}
          name={"All time top"}
          icon={<FaCrown size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={allTimeTop}
        />
        <IconBox
          name={"Best of the year"}
          icon={<BiSolidMedal size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={bestOfTheYear}
        />

        <IconBox
          name={"Popular in 2022"}
          icon={<IoStatsChartSharp size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
          apiKey={popular2022}
        />
      </div>
    </aside>
  );
};

function IconBox(props) {
  const [isSelected, setIsSelected] = useState(null);

  const { h3 = null, name, icon, onSidebarMenuClick, apiKey } = props;

  const handleSelect = (selectedItem, selectedApi) => {
    document.querySelectorAll(".iconBox.selectedIconBox").forEach((item) => {
      item.classList.remove("selectedIconBox");
    });
    setIsSelected(selectedItem);

    const savedData = {
      selectedItem: selectedItem,
      selectedApi: selectedApi,
    };

    localStorage.setItem("savedMenu", savedData.selectedItem);
    localStorage.setItem("savedGames", JSON.stringify(savedData.selectedApi));
  };

  useEffect(() => {
    const lastSelectedMenu = localStorage.getItem("savedMenu");

    // If a menu was previously selected, set it as the initial selected item
    if (lastSelectedMenu) {
      setIsSelected(lastSelectedMenu);
    }
    onSidebarMenuClick(lastSelectedMenu);
  }, [isSelected]);

  return (
    <div className="navSection">
      <div className={h3 === null ? "no-title" : "section-title"}>
        <h3>{h3}</h3>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="section-box">
        <a
          onClick={(e) => {
            e.preventDefault();
            onSidebarMenuClick(name, apiKey);
            handleSelect(name, apiKey);
          }}
          href="#"
          className={`opened-page ${h3 === null ? "without-title" : null} `}
        >
          <div
            className={`iconBox ${
              isSelected === name ? "selectedIconBox" : ""
            }`}
          >
            {icon}
          </div>
          {name}
        </a>
      </motion.div>
    </div>
  );
}

export { SidebarMenu };
