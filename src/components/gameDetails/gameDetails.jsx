import "./gameDetails.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Header } from "../header/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import AccordionTable from "./accordion/accordion";
import { RawgService } from "../../services/rawgService";
import { Spinner } from "../spinner/spinner";

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const GameDetails = ({ selectedGameId }) => {
  const [selectedGame, setSelectedGame] = useState({});
  const { loading, getGameData } = RawgService();

  //This is to automatically send data when the page is opened
  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    console.log("Sended the data");
    getGameData(selectedGameId).then(onGameLoaded);
  };

  const onGameLoaded = (gameId) => {
    setSelectedGame(gameId);
  };

  const spinner = loading ? <Spinner /> : null;
  const content = <View game={selectedGame} />;
  return (
    <div className="gameDetails">
      <Header />
      {content}
      {/* {spinner} */}
    </div>
  );
};

const View = ({ game }) => {
  const { name, description } = game;

  return (
    <div className="gameDetails__container">
      <div className="details-header">
        <button className="goBack-btn display-flex ">
          <IoMdArrowRoundBack /> Back
        </button>
        <div className="cur-game-name">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="details-content">
        <div className="game-screenshots">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <div className="game-details">
          <div className="description-box">
            <AccordionTable description={description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameDetails };
