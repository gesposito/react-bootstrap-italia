import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import "bootstrap-italia/dist/css/bootstrap-italia.css";
import { UncontrolledAlert } from "reactstrap";

import AlertExample from "./AlertExample";

storiesOf("Componenti/Alert/Chiusura", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Non controllata", () => (
    <UncontrolledAlert color="warning">
      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    </UncontrolledAlert>
  ))
  .add("Controllata", () => <AlertExample />);