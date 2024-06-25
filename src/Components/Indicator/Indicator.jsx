import PropTypes from 'prop-types'
import './indicator.css'

const Indicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="indicator-container">
      {[...Array(totalSteps)].map((_, index) => (
        <span
          key={index}
          className={`circle ${index === currentStep ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
};

Indicator.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
};

export default Indicator