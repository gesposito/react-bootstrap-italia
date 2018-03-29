import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import ScrollspyExample from "./ScrollspyExample";

storiesOf("Componenti/Scrollspy", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => <ScrollspyExample />);
