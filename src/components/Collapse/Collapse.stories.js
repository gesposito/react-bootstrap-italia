import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import CollapseExample from "./CollapseExample";
import CollapseAccordionExample from "./CollapseAccordionExample";

const stories = storiesOf("Componenti/Collapse", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => <CollapseExample />);
stories.add("Elemento a fisarmonica", () => <CollapseAccordionExample />);
