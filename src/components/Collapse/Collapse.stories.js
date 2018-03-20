import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import CollapseExample from "./CollapseExample";

storiesOf("Componenti/Collapse", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => <CollapseExample />)
  .add("Esempio di elemento a fisarmonica", () => <div>
    TBD
  </div>);
