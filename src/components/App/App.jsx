import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";
import { GameDetails } from "../gameDetails/gameDetails";
import { CartModal } from "../cartModal/cartModal";

import "./App.css";

const App = () => {
  const [pageTitle, setPageTitle] = useState(null);
  const [selectedApi, setSelectedApi] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [gamePrice, setGamePrice] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [addedCartGames, setAddedCartGames] = useState([]);
  let currentGamePrice = localStorage.getItem("currentGamePrice");

  const handleSidebarClick = (title, api) => {
    setPageTitle(title);
    setSelectedApi(api);
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

  const handleAddCartGames = (name, image, price) => {
    setAddedCartGames((prevGames) => [...prevGames, { name, image, price }]);
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
                pageTitle={pageTitle}
                selectedApi={selectedApi}
                handleGetId={handleGetId}
                handleGetPrice={handleGetPrice}
                handleModalStatus={handleModalStatus}
                handleAddCartGames={handleAddCartGames}
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
              />
            }
          ></Route>
        </Routes>
        <CartModal
          modalStatus={modalStatus}
          handleModalStatus={handleModalStatus}
          addedCartGames={addedCartGames}
        />
      </div>
    </Router>
  );
};

export default App;
