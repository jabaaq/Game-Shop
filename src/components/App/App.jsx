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

  const handleSidebarClick = (title, api) => {
    setPageTitle(title);
    setSelectedApi(api);
  };

  const handleGetId = (id) => {
    setSelectedGameId(id);
    console.log(id);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<MainPage onSidebarMenuClick={handleSidebarClick} />}
          ></Route>
          <Route
            path="/games"
            element={
              <StorePage
                onSidebarMenuClick={handleSidebarClick}
                pageTitle={pageTitle}
                selectedApi={selectedApi}
                handleGetId={handleGetId}
              />
            }
          ></Route>
          <Route
            path="/games/game"
            element={<GameDetails selectedGameId={selectedGameId} />}
          ></Route>
        </Routes>

        {/* <CartModal /> */}
      </div>
    </Router>
  );
};

export default App;
