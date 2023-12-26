import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import { AnimatedPage } from "../animatedPage/AnimatedPage";
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
    <AnimatedPage>
      <div className="shop-page">
        <Navbar
          handleModalStatus={handleModalStatus}
          handleGetId={handleGetId}
          addedCartGames={addedCartGames}
        />
        <SidebarMenu onSidebarMenuClick={onSidebarMenuClick} />
        <GamesList
          handleGetId={handleGetId}
          handleGetPrice={handleGetPrice}
          handleAddCartGames={handleAddCartGames}
          addedCartGames={addedCartGames}
          selectedGameList={selectedGameList}
        />
      </div>
    </AnimatedPage>
  );
};

export { StorePage };
