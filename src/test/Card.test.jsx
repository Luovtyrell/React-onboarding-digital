import { test } from "vitest";
import Card from "../Components/Card/Card";
import tutorialData from "../Data/Data";

test("Card renders with default props", ({ expect }) => {
  const testData = tutorialData[0];

  const cardComponent = (
    <Card
      id={testData.id}
      title={testData.title}
      description={testData.description}
      bgColor={testData.bgColor}
      image={testData.image}
      nextStep={() => {}}  
      prevStep={() => {}}  
      step={0} 
      totalSteps={tutorialData.length}
    />
  );

  const {
    id: actualId,
    title: actualTitle,
    description: actualDescription,
    bgColor: actualBgColor,
    image: actualImage,
    nextStep: actualNextStep,
    prevStep: actualPrevStep,
  } = cardComponent.props;

  expect(actualId).toBe(testData.id);
  expect(actualTitle).toBe(testData.title);
  expect(actualDescription).toBe(testData.description);
  expect(actualBgColor).toBe(testData.bgColor);
  expect(actualImage).toBe(testData.image);
  expect(typeof actualNextStep).toBe("function");
  expect(typeof actualPrevStep).toBe("function");
});
