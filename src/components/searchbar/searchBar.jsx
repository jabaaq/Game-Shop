import "./searchBar.css";
import "animate.css";
import { CiSearch } from "react-icons/ci";

import { RawgService } from "../../services/rawgService";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { loading, getGameFromSearch } = RawgService();

  const [foundedGames, setFoundedGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState("");

  const onRequest = () => {
    getGameFromSearch(searchedGames).then(onGameLoading);
  };

  const onGameLoading = (newGames) => {
    setFoundedGames(() => [...newGames]);
  };

  // useEffect(() => {
  //   console.log(foundedGames);
  // }, [foundedGames]);

  // useEffect(() => {
  //   onRequest();
  // }, [searchedGames]);

  useEffect(() => {
    console.log(searchedGames);
  }, [searchedGames]);

  return (
    <div className="container-input">
      <input
        type="text"
        placeholder="Search"
        name="text"
        className="input"
        onChange={(e) => {
          setSearchedGames(e.target.value);
        }}
      />
      <CiSearch size={22} />
      <div
        className={`search-suggestion-box animate__animated animate__bounceIn  ${
          searchedGames.length > 0 ? "open" : ""
        }`}
      >
        <div className="search-suggestion-list">
          <li>Hello world!</li>
          <li>Hello world!</li>
          <li>Hello world!</li>
          <li>Hello world!</li>
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
