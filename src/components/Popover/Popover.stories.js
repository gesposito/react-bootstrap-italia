import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Popover, PopoverHeader, PopoverBody, Button } from "reactstrap";

import PopoverExample from "./PopoverExample";
import PopoverPositionExample from "./PopoverPositionExample";

const stories = storiesOf("Componenti/Popover", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => <PopoverExample />);
stories.add("Le quattro direzioni", () => <PopoverPositionExample />);
stories.add("Elementi disabilitati", () => (
  <div>
    <Button color="primary" id="Example" disabled>
      Popover disabilitato
    </Button>
    <Popover placement="right" target="Example">
      <PopoverHeader>Titolo del popover</PopoverHeader>
      <PopoverBody>
        Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?
      </PopoverBody>
    </Popover>
  </div>
));
