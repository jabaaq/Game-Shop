import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";

import "./App.css";

function App() {
  const [loadedGames, setLoadedGames] = useState(null);

  const handleLoadedGames = (games) => {
    setLoadedGames(games);
    console.log(games);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<MainPage handleLoadedGames={handleLoadedGames} />}
          ></Route>
          <Route
            path="/games"
            element={<StorePage loadedGames={loadedGames} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
