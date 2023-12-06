import "./sidebar.css";
import { FaStar } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { motion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";

import { useState } from "react";
import { GamesList } from "../gamesList/gamesList";

const SidebarMenu = ({ onSidebarMenuClick }) => {
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
          h3={null}
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
          h3={null}
          name={"Next month"}
          icon={<TbPlayerTrackNextFilled size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          h3={"Top"}
          name={"Best of the year"}
          icon={<IoMdTrophy size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
        <IconBox
          h3={null}
          name={"Popular in 2022"}
          icon={<IoStatsChartSharp size={20} />}
          onSidebarMenuClick={onSidebarMenuClick}
        />
      </div>
    </aside>
  );
};

function IconBox(props) {
  const { h3 = null, name, icon, onSidebarMenuClick } = props;

  return (
    <div className="navSection">
      <div className={h3 === null ? "no-title" : "section-title"}>
        <h3>{h3}</h3>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="section-box">
        <a
          onClick={(e) => {
            e.preventDefault();
            onSidebarMenuClick(name, "#");
          }}
          href="#"
          className={`opened-page ${h3 === null ? "without-title" : null}`}
        >
          <div className="iconBox">{icon}</div>
          {name}
        </a>
      </motion.div>
    </div>
  );
}

export { SidebarMenu };
