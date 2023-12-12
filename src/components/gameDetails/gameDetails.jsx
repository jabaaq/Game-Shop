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
  const [gameScreenshots, setGameScreenshots] = useState({});
  const { loading, getGameData, getGameScreenshots } = RawgService();

  //This is to automatically send data when the page is opened
  useEffect(() => {
    if (selectedGameId) {
      onRequest();
    }
  }, [selectedGameId]);

  const onRequest = () => {
    getGameData(selectedGameId).then(onGameLoaded);
    getGameScreenshots(selectedGameId).then((res) => {
      setGameScreenshots(res);
    });
  };

  const onGameLoaded = (gameId) => {
    setSelectedGame(gameId);
  };

  const spinner = <Spinner />;
  const content = <View game={selectedGame} screenshots={gameScreenshots} />;
  return (
    <div className="gameDetails">
      <Header />
      {loading ? spinner : content}
    </div>
  );
};

const View = ({ game, screenshots }) => {
  const {
    name,
    description,
    rating,
    released,
    genres,
    website,
    developers,
    publishers,
  } = game;

  const screenshotsArray = screenshots.screenshots || [];

  // Now 'screenshotsArray' contains the array of URLs
  console.log(screenshotsArray);

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
          <>
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
              {screenshotsArray.map((screenshot, i) => (
                <SwiperSlide key={i}>
                  <img src={screenshot} alt={`Game screenshot ${i}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
        <div className="game-details">
          <div className="description-box">
            <AccordionTable
              description={description}
              rating={rating}
              released={released}
              genres={genres}
              website={website}
              developers={developers}
              publishers={publishers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameDetails };
