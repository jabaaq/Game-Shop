import video from "../../assets/MainPage-background.mp4";
import { Header } from "../header/Header";
import { NavigationList } from "../navigationList/NavigationList";
import Icon from "@mdi/react";
import { mdiAlphaRBox } from "@mdi/js";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="main-page">
        <div className="left-page">
          <div className="information-block">
            <div className="content" id="content1">
              <h2>Game Wave</h2>
              <p>
                It’s not a commercial project. You can’t buy any games here and
                all of the prices are generated to imitate a real game shop.
                Enjoy😊
              </p>
            </div>
            <div id="content2" className="content">
              <a
                className="github-btn"
                href="https://github.com/jabaaq"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
                <p>jabaaq</p>
              </a>
              <a
                href="https://rawg.io/"
                className="github-btn"
                id="rawg-btn"
                target="_blank"
              >
                <p>
                  <Icon path={mdiAlphaRBox} size={1} />
                  RAWG
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="right-page">
          <NavigationList />
        </div>
      </div>
      <video src={video} autoPlay loop muted></video>
    </div>
  );
};

export { MainPage };
