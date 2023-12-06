import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import "./storePage.css";
import { useState } from "react";

const StorePage = () => {
  const [pageTitle, setPageTitle] = useState(null);
  const [selectedApi, setSelectedApi] = useState(null);

  const handleSidebarClick = (title, api) => {
    setPageTitle(title);
    setSelectedApi(api);
  };

  return (
    <div className="shop-page">
      <Navbar />
      <SidebarMenu onSidebarMenuClick={handleSidebarClick} />
      <GamesList pageTitle={pageTitle} selectedApi={selectedApi} />
    </div>
  );
};

export { StorePage };
