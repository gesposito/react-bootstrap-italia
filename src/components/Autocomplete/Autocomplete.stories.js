import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import AutocompleteExample from "./AutocompleteExample";

storiesOf("Componenti/Autocomplete", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Input autocomplete", () => (
    <section>
      <AutocompleteExample />
    </section>
  ));
