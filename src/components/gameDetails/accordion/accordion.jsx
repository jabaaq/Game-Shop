import "./accordion.css";
import { FaAngleDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AccordionTable = ({
  description,
  rating,
  released,
  genres,
  website,
  developers,
  publishers,
}) => {
  return (
    <section className="accordion">
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb1" defaultChecked />
        <label htmlFor="cb1" className="tab__label">
          <h1>Description</h1>
        </label>
        <div className="tab__content">
          <div className="tab__content-inner">{description}</div>
        </div>
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
            <a target="_blank" href={website}>
              {website}{" "}
            </a>
          </p>
          <p>Released: {released}</p>
          <p>Genres: {genres}</p>
          <p>
            Rating: {rating} <FaStar />{" "}
          </p>
          <p>Developers: {developers} </p>
          <p>Publishers: {publishers}</p>
        </div>
      </div>
    </section>
  );
};

export default AccordionTable;
