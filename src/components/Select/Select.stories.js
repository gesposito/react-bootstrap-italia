import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import SelectExample from "./SelectExample";

const stories = storiesOf("Componenti/Select", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => <SelectExample />);
stories.add("Multipla", () => <SelectExample multi />);
stories.add("Con ricerca", () => <SelectExample search />);
stories.add("Con gruppi di opzioni", () => <SelectExample group multi />);
