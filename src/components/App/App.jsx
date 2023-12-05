import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";
import { useRawgService } from "../../services/rawgService";

import "./App.css";

function App() {
  return (
    <Router>
      <useRawgService />
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/games" element={<StorePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
