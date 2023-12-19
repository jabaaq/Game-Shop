import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import "./storePage.css";

const StorePage = ({
  onSidebarMenuClick,
  handleGetId,
  handleGetPrice,
  handleModalStatus,
  handleAddCartGames,
  addedCartGames,
  selectedGameList,
}) => {
  return (
    <div className="shop-page">
      <Navbar handleModalStatus={handleModalStatus} />
      <SidebarMenu onSidebarMenuClick={onSidebarMenuClick} />
      <GamesList
        handleGetId={handleGetId}
        handleGetPrice={handleGetPrice}
        handleAddCartGames={handleAddCartGames}
        addedCartGames={addedCartGames}
        selectedGameList={selectedGameList}
      />
    </div>
  );
};

export { StorePage };
