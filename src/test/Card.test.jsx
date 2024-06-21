import { test } from "vitest";
import Card from "../Components/Card";

test("Card renders with default props", ({ expect }) => {
  const title = "Title";
  const description = "Description";

  const cardComponent = <Card title={title} description={description} />;

  const {
    title: actualTitle,
    description: actualDescription,
    bgColor,
    image,
  } = cardComponent.props;

  expect(actualTitle).toBe(title);
  expect(actualDescription).toBe(description);
  expect(bgColor).toBeUndefined();
  expect(image).toBeUndefined();
});