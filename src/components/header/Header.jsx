import { BiSolidGhost } from "react-icons/bi";
import "./Header.css";
import { CartModal } from "../cartModal/cartModal";
import { PiShoppingCartThin } from "react-icons/pi";
import { SearchBar } from "../searchbar/searchbar";

const Header = ({ handleModalStatus }) => {
  return (
    <header>
      <div className="page-logo">
        <BiSolidGhost size={35} />
        <h2 className="title">Game Wave</h2>
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div
        className="cart"
        onClick={() => {
          handleModalStatus(true);
        }}
      >
        <PiShoppingCartThin size={30} />
      </div>
    </header>
  );
};

export { Header };
