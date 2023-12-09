import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";

import "./App.css";

const App = () => {
  const [pageTitle, setPageTitle] = useState(null);
  const [selectedApi, setSelectedApi] = useState(null);

  const handleSidebarClick = (title, api) => {
    setPageTitle(title);
    setSelectedApi(api);
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
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
