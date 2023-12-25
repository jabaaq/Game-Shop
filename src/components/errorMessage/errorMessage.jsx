import "./errorMessage.css";
import { RestartPageBtn } from "./restartPageBtn/restartPageBtn";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ErrorMessage = () => {
  return (
    <div className="error-modal">
      <div className="error-modal-box">
        <h1 className="error-header-text">Oops! Something went wrong!</h1>
        <p className="error-text-paragraph">
          You may also refresh the page or try again later (Press go back)
        </p>
        <p className="error-text-paragraph">
          Brace yourself till we get the error fixed.
        </p>
        <div className="modal-buttons">
          <button className="restart-button">
            <Link to={"/"}>
              <IoIosArrowBack />
              <span>Go back</span>
            </Link>
          </button>
          <RestartPageBtn />
        </div>
      </div>
    </div>
  );
};

export { ErrorMessage };
