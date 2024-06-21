import { useState } from "react";
import tutorialData from "../Data/Data";
import Card from "../Components/Card";

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        bgColor={tutorialData[step].bgColor}
        image={tutorialData[step].image}
        nextStep={nextStep}
      />
    </>
  );
}

export default App;
