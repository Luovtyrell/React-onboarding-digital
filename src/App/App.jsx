import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import tutorialData from "../Data/Data";
import Card from "../Components/Card";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-6 col-md-6 col-lg-3 mb-4">
          <Card
            image={tutorialData[step].image}
            title={tutorialData[step].title}
            description={tutorialData[step].description}
            bgColor={tutorialData[step].bgColor}
            nextStep={nextStep}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
