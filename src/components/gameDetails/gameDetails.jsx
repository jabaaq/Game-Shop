import "./gameDetails.css";
import "swiper/css";
import { Header } from "../header/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swiper from "swiper";

const GameDetails = () => {
  return (
    <div className="gameDetails">
      <Header />
      <div className="gameDetails__container">
        <div className="details-header">
          <button className="goBack-btn display-flex ">
            <IoMdArrowRoundBack /> Back
          </button>
          <div className="cur-game-name">
            <h1>Grand Theft Auto 5</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameDetails };
