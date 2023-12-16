import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import "./storePage.css";

const StorePage = ({
  onSidebarMenuClick,
  pageTitle,
  selectedApi,
  handleGetId,
  handleGetPrice,
  handleModalStatus,
  handleAddCartGames,
}) => {
  return (
    <div className="shop-page">
      <Navbar handleModalStatus={handleModalStatus} />
      <SidebarMenu onSidebarMenuClick={onSidebarMenuClick} />
      <GamesList
        pageTitle={pageTitle}
        selectedApi={selectedApi}
        handleGetId={handleGetId}
        handleGetPrice={handleGetPrice}
        handleAddCartGames={handleAddCartGames}
      />
    </div>
  );
};

export { StorePage };
