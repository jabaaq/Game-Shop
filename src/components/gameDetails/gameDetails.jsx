import "./gameDetails.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoMdArrowRoundBack } from "react-icons/io";
import AccordionTable from "./accordion/accordion";
import { RawgService } from "../../services/rawgService";
import { Spinner } from "../spinner/spinner";
import { Link, useParams } from "react-router-dom";
import { AddToCart } from "./addToCart/addToCart";
import { motion } from "framer-motion";
import { AnimatedPage } from "../animatedPage/AnimatedPage";
import { Navbar } from "../navBar/NavBar";

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const GameDetails = ({
  selectedGameId,
  handleGetPrice,
  handleModalStatus,
  handleAddCartGames,
  addedCartGames,
}) => {
  let storedGame = localStorage.getItem("selectedGame");
  let storedGameScreenshots = localStorage.getItem("gameScreenshots");
  const [selectedGame, setSelectedGame] = useState({});
  const [gameScreenshots, setGameScreenshots] = useState({});
  const { loading, getGameData, getGameScreenshots } = RawgService();

  const { id } = useParams();

  //This is to automatically send data when the page is opened
  useEffect(() => {
    if (id) {
      onRequest();
    } else {
      setSelectedGame(JSON.parse(storedGame));
      setGameScreenshots(JSON.parse(storedGameScreenshots));
    }
  }, [selectedGameId, id]);

  const onRequest = () => {
    getGameData(id).then(onGameLoaded);
    getGameScreenshots(id).then((res) => {
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
      //to add the games into the shopping cart
      handleAddCartGames={handleAddCartGames}
      //To check if the game is added or not - to stylize the add cart button
      addedCartGames={addedCartGames}
    />
  );

  const { name } = selectedGame;
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={`Information about ${name}`} />
        <title>Game Wave | {`${name}`}</title>
      </Helmet>
      <div className="gameDetails">
        <Navbar
          handleModalStatus={handleModalStatus}
          addedCartGames={addedCartGames}
        />
        {loading ? spinner : content}
      </div>
    </HelmetProvider>
  );
};

const View = ({
  game,
  screenshots,
  handleGetPrice,
  handleAddCartGames,
  addedCartGames,
}) => {
  const {
    name,
    description,
    rating,
    released,
    genres,
    website,
    developers,
    publishers,
    // id,
    background_image,
  } = game;

  const { id } = useParams();

  //Information to add to cart
  const selectedGameInfoForTheCart = {
    name,
    id: id,
    image: background_image,
    price: handleGetPrice,
  };
  const screenshotsArray = screenshots.screenshots || []; //This is used to ensure that screenshotsArray will always be an array, even if screenshots.screenshots is undefined or false.
  const lastSelectedGames = localStorage.getItem("savedGames");
  return (
    <AnimatedPage>
      <div className="gameDetails__container">
        <div className="details-header">
          <button className="goBack-btn display-flex">
            <Link to={lastSelectedGames ? "/games" : "/"}>
              <IoMdArrowRoundBack /> Back
            </Link>
          </button>
          <div className="cur-game-name">
            <h2>
              {name && name.length > 40 ? name.slice(0, 40) + "..." : name}{" "}
            </h2>
          </div>
        </div>
        <div className="details-content">
          <div className="game-screenshots">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              // loop={true}
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
                <AddToCart
                  handleGetPrice={handleGetPrice}
                  //to add the games into the shopping cart
                  selectedGameInfoForTheCart={selectedGameInfoForTheCart}
                  handleAddCartGames={handleAddCartGames}
                  //To check if the game is added or not - to stylize the add cart button
                  addedCartGames={addedCartGames}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export { GameDetails };
