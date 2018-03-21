import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { FormGroup, Label, Input } from "reactstrap";

storiesOf("Componenti/Radio Button", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <FormGroup>
      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" checked />
        <Label check for="radio1">
          Opzione 1
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Opzione 2
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio3" />
        <Label check for="radio3">
          Opzione 3
        </Label>
      </FormGroup>
    </FormGroup>
  ))
  .add("Inline", () => (
    <FormGroup>
      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio1" checked />
        <Label check for="radio1">
          Opzione 1
        </Label>
      </FormGroup>

      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Opzione 2
        </Label>
      </FormGroup>

      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio3" />
        <Label check for="radio3">
          Opzione 3
        </Label>
      </FormGroup>
    </FormGroup>
  ))
  .add("Disabilitati", () => (
    <FormGroup>
      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" checked disabled />
        <Label check for="radio1">
          Opzione 1
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" disabled />
        <Label check for="radio2">
          Opzione 2
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio3" disabled />
        <Label check for="radio3">
          Opzione 3
        </Label>
      </FormGroup>
    </FormGroup>
  ));
