import { useState, useEffect } from "react";
import "./App.css";
import { MainPage } from "../mainPage/mainPage";
import { StorePage } from "../storePage/storePage";

function App() {
  return (
    <div className="app">
      {/* <MainPage /> */}
      <StorePage />
    </div>
  );
}

export default App;
