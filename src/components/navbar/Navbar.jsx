import Icon from "@mdi/react";
import { BiSolidGhost } from "react-icons/bi";
import { motion } from "framer-motion";
import { PiShoppingCartThin } from "react-icons/pi";
import { SearchBar } from "../searchbar/searchbar";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleModalStatus, handleGetId }) => {
  return (
    <header id="main-header">
      <Link to="/">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          className="header-title"
        >
          <BiSolidGhost size={35} />
          <h2>Game Wave</h2>
        </motion.div>
      </Link>
      <div className="searchbar">
        <div className="search">
          <SearchBar handleGetId={handleGetId} />
        </div>
      </div>
      <div
        className="cart-icon"
        onClick={() => {
          handleModalStatus(true);
        }}
      >
        <PiShoppingCartThin size={30} />
      </div>
    </header>
  );
};

export { Navbar };
