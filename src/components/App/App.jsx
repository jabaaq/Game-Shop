import { useState, useEffect } from "react";
import { useRawgService } from "../../services/rawgService";
import "./App.css";
import { MainPage } from "../mainPage/mainPage";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="app">
      <MainPage />
    </div>
  );
}

export default App;
