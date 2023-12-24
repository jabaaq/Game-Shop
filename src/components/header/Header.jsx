import { BiSolidGhost } from "react-icons/bi";
import "./Header.css";
import { CartModal } from "../cartModal/cartModal";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { SearchBar } from "../searchbar/searchBar";

const Header = ({ handleModalStatus, handleGetId, addedCartGames }) => {
  return (
    <header>
      <div className="page-logo">
        <BiSolidGhost size={35} />
        <h2 className="title">Game Wave</h2>
      </div>
      <div className="search">
        <SearchBar handleGetId={handleGetId} />
      </div>
      <div
        className="cart"
        onClick={() => {
          handleModalStatus(true);
        }}
      >
        <PiShoppingCartThin size={30} />
        <GoDotFill
          className={`game-into-cart ${
            addedCartGames.length > 0 ? "show" : ""
          }`}
          size={12}
        />
      </div>
    </header>
  );
};

export { Header };
