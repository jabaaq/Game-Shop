import { RestartPageBtn } from "./restartPageBtn/restartPageBtn";

import "./errorMessage.css";

const ErrorMessage = () => {
  return (
    <div className="error-modal">
      <div className="error-modal-box">
        <h1 className="error-header-text">Oops! Something went wrong!</h1>
        <p className="error-text-paragraph">
          You may also refresh the page or try again later
        </p>
        <p className="error-text-paragraph">
          Brace yourself till we get the error fixed.
        </p>
        <RestartPageBtn />
      </div>
    </div>
  );
};

export { ErrorMessage };
