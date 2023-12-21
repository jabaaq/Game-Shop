import "./searchBar.css";
import "animate.css";
import { CiSearch } from "react-icons/ci";

import { RawgService } from "../../services/rawgService";
import { SearchBarItem } from "./searchBar-Item/searchBar-item";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner/spinner";

const SearchBar = () => {
  const { loading, getGameFromSearch } = RawgService();

  const [foundedGames, setFoundedGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const onRequest = () => {
    setIsSearching(true);
    getGameFromSearch(searchedGames).then(onGameLoading);
  };

  const handleCheckInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleCheckInputBlur = () => {
    setIsInputFocused(false);
  };

  const onGameLoading = (newGames) => {
    setFoundedGames(() => [...newGames]);
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  useEffect(() => {
    onRequest();
  }, [searchedGames]);

  function renderFoundedGames(arr) {
    const games = arr.map((item, i) => {
      return (
        <li className="searchBar-item-list" key={i}>
          <SearchBarItem
            name={item.name}
            backgroundImage={item.background_image}
            id={item.id}
          />
        </li>
      );
    });
    return <ul className="search-suggestion-list">{games}</ul>;
  }

  const foundedGamesList = renderFoundedGames(foundedGames);
  const spinner = isSearching ? <Spinner /> : "";

  return (
    <div className="container-input">
      <input
        type="text"
        placeholder="Search games..."
        className="input"
        onChange={(e) => {
          setSearchedGames(e.target.value);
        }}
        onFocus={handleCheckInputFocus}
        onBlur={handleCheckInputBlur}
        value={searchedGames}
      />
      <CiSearch size={22} />

      <div
        className={`search-suggestion-box animate__animated animate__fadeIn ${
          isInputFocused ? "open" : ""
        }`}
      >
        <div className="search-suggestion-box-inner">
          {isSearching ? spinner : foundedGamesList}
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
