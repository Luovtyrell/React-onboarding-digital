import { useState } from "react";
import tutorialData from "../Data/Data";
import Card from "../Components/Card";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        bgColor={tutorialData[step].bgColor}
        image={tutorialData[step].image}
      />
    </>
  );
}

export default App;
