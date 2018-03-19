import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "bootstrap-italia/dist/css/bootstrap-italia.css";

import { Button } from "reactstrap";

storiesOf("Button", module)
  .add("", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ));
