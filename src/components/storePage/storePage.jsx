import { Navbar } from "../navBar/NavBar";
import { SidebarMenu } from "../sidebar/sidebar";
import { GamesList } from "../gamesList/gamesList";
import "./storePage.css";

const StorePage = () => {
  return (
    <div className="shop-page">
      <Navbar />
      <SidebarMenu />
      {/* <GamesList /> */}
    </div>
  );
};

export { StorePage };
