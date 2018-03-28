import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import CollapseExample from "./CollapseExample";
import CollapseAccordionExample from "./CollapseAccordionExample";

storiesOf("Componenti/Collapse", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => <CollapseExample />)
  .add("Elemento a fisarmonica", () => <CollapseAccordionExample />);
