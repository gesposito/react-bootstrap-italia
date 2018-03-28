import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import SelectExample from "./SelectExample";

storiesOf("Componenti/Select", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => <SelectExample />)
  .add("Multipla", () => <SelectExample multi />)
  .add("Con ricerca", () => <SelectExample search />)
  .add("Con gruppi di opzioni", () => <SelectExample group multi />);
