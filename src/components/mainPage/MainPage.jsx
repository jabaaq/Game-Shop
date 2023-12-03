import video from "../../assets/MainPage-background.mp4";
import { Header } from "../header/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <video src={video} autoPlay loop muted></video>
    </div>
  );
};

export { MainPage };
