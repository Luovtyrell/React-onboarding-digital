import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  const handleButtonClick = () => {
    props.nextStep();
  };

  return (
    <div className="card custom-card">
      <img
        className="card-img-top"
        src={props.image}
        alt={props.title}
        style={{ "--bgColor": props.bgColor }}
      />
      <div className="card-body">
        <h5 className="card-title pt-2">{props.title}</h5>
        <p className="card-text small">{props.description}</p>
        <button className="btn btn-dark float-end" onClick={handleButtonClick}>
          →
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.SVG,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  description: PropTypes.string,
  nextStep: PropTypes.func,
};

export default Card;
