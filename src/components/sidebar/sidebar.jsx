import "./sidebar.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { sideBarButtons } from "./sidebarItems";

const SidebarMenu = ({ onSidebarMenuClick }) => {
  return (
    <aside id="sidebar">
      <div className="each-section">
        {sideBarButtons.map((item, i) => (
          <IconBox
            key={i}
            h3={item.h3}
            name={item.name}
            icon={item.icon}
            onSidebarMenuClick={onSidebarMenuClick}
            apiKey={item.apiKey}
          />
        ))}
      </div>
    </aside>
  );
};

function IconBox(props) {
  const [isSelected, setIsSelected] = useState(null);

  const { h3 = null, name, icon, onSidebarMenuClick, apiKey } = props;

  const handleSelect = (selectedItem, selectedApi) => {
    setIsSelected(selectedItem);

    document.querySelectorAll(".iconBox.selectedIconBox").forEach((item) => {
      item.classList.remove("selectedIconBox");
    });

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
