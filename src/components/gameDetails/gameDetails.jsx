import "./gameDetails.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navbar } from "../navBar/NavBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import AccordionTable from "./accordion/accordion";
import { RawgService } from "../../services/rawgService";
import { Spinner } from "../spinner/spinner";
import { Link } from "react-router-dom";
import { AddToCart } from "./addToCart/addToCart";
import { motion } from "framer-motion";

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const GameDetails = ({ selectedGameId, handleGetPrice, handleModalStatus }) => {
  let storedGame = localStorage.getItem("selectedGame");
  let storedGameScreenshots = localStorage.getItem("gameScreenshots");

  const [selectedGame, setSelectedGame] = useState({});
  const [gameScreenshots, setGameScreenshots] = useState({});
  const { loading, getGameData, getGameScreenshots } = RawgService();

  //This is to automatically send data when the page is opened
  useEffect(() => {
    if (selectedGameId) {
      onRequest();
    } else {
      setSelectedGame(JSON.parse(storedGame));
      setGameScreenshots(JSON.parse(storedGameScreenshots));
    }
  }, [selectedGameId]);

  const onRequest = () => {
    getGameData(selectedGameId).then(onGameLoaded);
    getGameScreenshots(selectedGameId).then((res) => {
      setGameScreenshots(res);
      localStorage.setItem("gameScreenshots", JSON.stringify(res));
    });
  };

  const onGameLoaded = (gameId) => {
    setSelectedGame(gameId);

    localStorage.setItem("selectedGame", JSON.stringify(gameId));
  };

  const spinner = <Spinner />;
  const content = (
    <View
      game={selectedGame}
      screenshots={gameScreenshots}
      handleGetPrice={handleGetPrice}
    />
  );
  return (
    <div className="gameDetails">
      <Navbar handleModalStatus={handleModalStatus} />
      {loading ? spinner : content}
    </div>
  );
};

const View = ({ game, screenshots, handleGetPrice }) => {
  const {
    name,
    description,
    rating,
    released,
    genres,
    website,
    developers,
    publishers,
    // background_image
  } = game;

  const screenshotsArray = screenshots.screenshots || []; //This is used to ensure that screenshotsArray will always be an array, even if screenshots.screenshots is undefined or false.

  return (
    <div className="gameDetails__container">
      <div className="details-header">
        <button className="goBack-btn display-flex ">
          <Link to={"/games"}>
            <IoMdArrowRoundBack /> Back
          </Link>
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
          <div className="add-to-cart-container">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="add-to-cart-btn"
            >
              <AddToCart handleGetPrice={handleGetPrice} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameDetails };
