import React from "react";

const Card = (props) => {
  const handleButtonClick = () => {
    props.nextStep();
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={handleButtonClick}>Next Step</button>
    </div>
  );
};

export default Card;
