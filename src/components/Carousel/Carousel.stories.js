import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import CarouselExample from "./CarouselExample";

const stories = storiesOf("Componenti/Carousel", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Solo diapositive", () => <CarouselExample />);
stories.add("Con i controlli", () => <CarouselExample controls={true} />);
stories.add("Con gli indicatori", () => (
  <CarouselExample controls={true} indicators={true} />
));
stories.add("Con le didascalie", () => (
  <CarouselExample controls={true} indicators={true} captions={true} />
));
