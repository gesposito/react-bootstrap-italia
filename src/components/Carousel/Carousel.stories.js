import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import CarouselExample from './CarouselExample';

storiesOf("Componenti/Carousel", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Solo diapositive", () => <CarouselExample />)
  .add("Con i controlli", () => <CarouselExample controls={true} />)
  .add("Con gli indicatori", () => (
    <CarouselExample controls={true} indicators={true} />
  ))
  .add("Con le didascalie", () => (
    <CarouselExample controls={true} indicators={true} captions={true} />
  ));
