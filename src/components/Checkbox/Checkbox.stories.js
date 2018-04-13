import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Form, FormGroup, Label, Input } from "reactstrap";

import CheckboxGroupsExample from "./CheckboxGroupsExample";

const stories = storiesOf("Componenti/Checkbox", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => (
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
));
stories.add("Inline", () => (
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
));
stories.add("Disabilitate", () => (
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
));
stories.add("Gruppi di Checkbox", () => <CheckboxGroupsExample />);
