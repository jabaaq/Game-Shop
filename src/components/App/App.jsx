import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";
import { GameDetails } from "../gameDetails/gameDetails";
import { CartModal } from "../cartModal/cartModal";

import "./App.css";

const App = () => {
  // const [pageTitle, setPageTitle] = useState(null);
  // const [selectedApi, setSelectedApi] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [gamePrice, setGamePrice] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  //to add the games from the gamesList into the cartModal
  const [addedCartGames, setAddedCartGames] = useState([]);
  const [selectedGameList, setSelectedGameList] = useState({});

  let currentGamePrice = localStorage.getItem("currentGamePrice");
  const cartAddedGames = localStorage.getItem("cartAddedGames");

  useEffect(() => {
    localStorage.setItem("cartAddedGames", JSON.stringify(addedCartGames));
  }, [addedCartGames]);

  useEffect(() => {
    setAddedCartGames(JSON.parse(cartAddedGames));
  }, []);

  const handleSidebarClick = (title, api) => {
    setSelectedGameList({ title, api });
  };

  const handleGetId = (id) => {
    setSelectedGameId(id);
  };

  const handleGetPrice = (price) => {
    setGamePrice(price);
    localStorage.setItem("currentGamePrice", price);
  };

  const handleModalStatus = (status) => {
    setModalStatus(status);
  };

  useEffect(() => {
    setGamePrice(currentGamePrice);
  }, [selectedGameId]);

  const handleAddCartGames = (newGames) => {
    const { name, image, price, id } = newGames;
    setAddedCartGames((prevGames) => {
      if (!prevGames.some((game) => game.id === id)) {
        return [...prevGames, { name, image, price, id }];
      } else {
        return prevGames;
      }
    });
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                onSidebarMenuClick={handleSidebarClick}
                handleModalStatus={handleModalStatus}
              />
            }
          ></Route>
          <Route
            path="/games"
            element={
              <StorePage
                onSidebarMenuClick={handleSidebarClick}
                selectedGameList={selectedGameList}
                handleGetId={handleGetId}
                handleGetPrice={handleGetPrice}
                handleModalStatus={handleModalStatus}
                handleAddCartGames={handleAddCartGames}
                addedCartGames={addedCartGames}
              />
            }
          ></Route>
          <Route
            path="/games/game"
            element={
              <GameDetails
                handleGetPrice={gamePrice}
                selectedGameId={selectedGameId}
                handleModalStatus={handleModalStatus}
                handleAddCartGames={handleAddCartGames}
                addedCartGames={addedCartGames}
              />
            }
          ></Route>
        </Routes>
        <CartModal
          modalStatus={modalStatus}
          handleModalStatus={handleModalStatus}
          addedCartGames={addedCartGames}
          setAddedCartGames={setAddedCartGames}
          handleGetId={handleGetId}
          handleGetPrice={handleGetPrice}
        />
      </div>
    </Router>
  );
};

export default App;
