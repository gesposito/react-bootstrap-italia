import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Form, FormGroup, Label, Input } from "reactstrap";

import RadioGroupsExample from "./RadioGroupsExample";

storiesOf("Componenti/Radio Button", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => (
    <Form className="m-3">
      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
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
    </Form>
  ))
  .add("Inline", () => (
    <Form className="m-3">
      <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
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
    </Form>
  ))
  .add("Disabilitati", () => (
    <Form className="m-3">
      <FormGroup check>
        <Input
          name="gruppo1"
          type="radio"
          id="radio1"
          defaultChecked
          disabled
        />
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
    </Form>
  ))
  .add("Gruppi di radio buttons", () => <RadioGroupsExample />);
