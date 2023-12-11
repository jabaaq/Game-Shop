import "./accordion.css";
import { FaAngleDown } from "react-icons/fa";

const AccordionTable = ({ description }) => {
  return (
    <section className="accordion">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb1" defaultChecked />
        <label htmlFor="cb1" className="tab__label">
          <h1>Description</h1>
        </label>
        <div className="tab__content">{description}</div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb2" />
        <label htmlFor="cb2" className="tab__label">
          <h4>
            More <FaAngleDown />
          </h4>
        </label>
        <div className="tab__content">
          <p>
            Website:{" "}
            <a href="#">
              https://www.ubisoft.com/en-gb/game/avatar-frontiers-of-pandora
            </a>
          </p>
          <p>Released: 2023/12/07</p>
          <p> Genres: Action, Adventure</p>
          <p> Platforms: PC, PlayStation, Xbox</p>
          <p>Developers: Massive Entertainment </p>
          <p> Publishers: Ubisoft Entertainment</p>
        </div>
      </div>
    </section>
  );
};

export default AccordionTable;
