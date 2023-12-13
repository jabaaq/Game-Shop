import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import "./storePage.css";
import { useState } from "react";

const StorePage = ({
  onSidebarMenuClick,
  pageTitle,
  selectedApi,
  handleGetId,
  handleGetPrice,
}) => {
  return (
    <div className="shop-page">
      <Navbar />
      <SidebarMenu onSidebarMenuClick={onSidebarMenuClick} />
      <GamesList
        pageTitle={pageTitle}
        selectedApi={selectedApi}
        handleGetId={handleGetId}
        handleGetPrice={handleGetPrice}
      />
    </div>
  );
};

export { StorePage };
