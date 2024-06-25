import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import tutorialData from "../Data/Data";
import Card from "../Components/Card/Card";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-6 col-md-6 col-lg-3 mb-4">
          <Card
            id={tutorialData[step].id}
            image={tutorialData[step].image}
            title={tutorialData[step].title}
            description={tutorialData[step].description}
            bgColor={tutorialData[step].bgColor}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            totalSteps={tutorialData.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
