import PropTypes from "prop-types";
import "./Card.css";
import Indicator from "../Indicator/Indicator";

const Card = (props) => {
  const handleButtonNext = () => {
    props.nextStep();
  };
  const handleButtonPrev = () => {
    props.prevStep();
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
        {props.id === 2 ? (
          <>
            <button className="btn btn-dark float-end" onClick={handleButtonNext}> → </button>
            <button className="btn btn-light me-2 float-end" onClick={handleButtonPrev}> ← </button>
          </>
        ) : props.id === 1 ? (
          <button className="btn btn-dark float-end" onClick={handleButtonNext}> → </button>
        ) : (
          <button className="btn btn-dark float-end" onClick={handleButtonPrev}> ← </button>
        )}
        <Indicator currentStep={props.step} totalSteps={props.totalSteps}/>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  description: PropTypes.string,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  step: PropTypes.number,
  totalSteps: PropTypes.number
};

export default Card;
