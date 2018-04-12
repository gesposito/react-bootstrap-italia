import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import CollapseExample from "./CollapseExample";
import CollapseAccordionExample from "./CollapseAccordionExample";

storiesOf("Componenti/Collapse", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => <CollapseExample />)
  .add("Elemento a fisarmonica", () => <CollapseAccordionExample />);
