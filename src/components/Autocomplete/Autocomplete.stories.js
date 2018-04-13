import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import AutocompleteExample from "./AutocompleteExample";

const stories = storiesOf("Componenti/Autocomplete", module);
// .addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Input autocomplete", () => (
  <section>
    <AutocompleteExample />
  </section>
));
