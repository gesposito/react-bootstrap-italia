import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import ScrollspyExample from "./ScrollspyExample";

storiesOf("Componenti/Scrollspy", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => <ScrollspyExample />);
