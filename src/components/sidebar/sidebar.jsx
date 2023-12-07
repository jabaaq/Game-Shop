import "./sidebar.css";
import { GetUrl } from "../getUrl/getUrl";
import { FaStar } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { motion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

const SidebarMenu = ({ onSidebarMenuClick }) => {
  const { popular2022, bestOfTheYear } = GetUrl();

  return (
    <aside id="sidebar">
      <div className="each-section">
        <IconBox
          h3={"Your Games"}
          name={"Added Games"}
          icon={<CgMenuGridO size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          name={"Games"}
          icon={<IoGameController size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          h3={"New Releases"}
          name={"Last 30 days"}
          icon={<FaStar size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          name={"Next month"}
          icon={<TbPlayerTrackNextFilled size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          h3={"Top"}
          name={"Best of the year"}
          icon={<IoMdTrophy size={20} />}
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
  const { h3 = null, name, icon, onSidebarMenuClick, apiKey } = props;

  const [isSelected, setIsSelected] = useState("");

  const handleSelect = (selectedItem) => {
    document.querySelectorAll(".iconBox.selectedIconBox").forEach((item) => {
      item.classList.remove("selectedIconBox");
    });
    setIsSelected(selectedItem);
  };

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
            handleSelect(name);
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
