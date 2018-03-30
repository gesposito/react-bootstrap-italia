import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Form, FormGroup, Label, Input } from "reactstrap";

import CheckboxGroupsExample from "./CheckboxGroupsExample";

storiesOf("Componenti/Checkbox", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <Form>
      <FormGroup check>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Label di esempio
        </Label>
      </FormGroup>
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
    </Form>
  ))
  .add("Inline", () => (
    <Form>
      <FormGroup check inline>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox non selezionato
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Input id="checkbox2" type="checkbox" defaultChecked />
        <Label for="checkbox2" check>
          Checkbox selezionato
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Disabilitate", () => (
    <Form>
      <FormGroup check>
        <Input id="checkbox1" type="checkbox" disabled />
        <Label for="checkbox1" check>
          Checkbox disabilitato non selezionato
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input id="checkbox2" type="checkbox" disabled defaultChecked />
        <Label for="checkbox2" check>
          Checkbox disabilitato selezionato
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Gruppi di Checkbox", () => <CheckboxGroupsExample />);
