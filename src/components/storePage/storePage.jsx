import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Page with list of games" />
        <title>Game Wave | Store</title>
      </Helmet>
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
    </HelmetProvider>
  );
};

export { StorePage };
