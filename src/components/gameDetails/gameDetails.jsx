import "./gameDetails.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Header } from "../header/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import AccordionTable from "./accordion/accordion";

import { Pagination, Navigation } from "swiper/modules";

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
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
          <div className="game-details">
            <div className="description-box">
              <AccordionTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameDetails };
