import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";

import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

import Toggle from "./Toggle";

import TogglesExample from "./TogglesExample";
import TogglesGroupsExample from "./TogglesGroupsExample";

const stories = storiesOf("Componenti/Toggles", module);
stories.addDecorator((story, context) => withInfo("")(story)(context));
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => (
  <section>
    <TogglesExample />
  </section>
));
stories.add("Disabilitati", () => (
  <section>
    <TogglesExample disabled />
  </section>
));
stories.add("Gruppi", () => (
  <section>
    <TogglesGroupsExample />
  </section>
));
stories.add("Esempi con markup", () => (
  <section>
    <Row>
      <Col sm="6">
        <FormGroup check className="m-3">
          <div className="toggles">
            <Label for="toggleEsempio1a">
              Label dell'interruttore 1
              <Input type="checkbox" id="toggleEsempio1a" />
              <span className="lever" />
            </Label>
          </div>
        </FormGroup>
      </Col>
      <Col sm="6">
        <FormGroup check className="m-3">
          <div className="toggles">
            <Label for="toggleEsempio1b">
              Label dell'interruttore 2
              <Input type="checkbox" id="toggleEsempio1b" />
              <span className="lever leverRight" />
            </Label>
          </div>
        </FormGroup>
      </Col>
    </Row>
  </section>
));

const knobsStories = storiesOf("Componenti/Toggles", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const checked = boolean("Selezionato", true);
  const disabled = boolean("Disabilitato", false);
  const label = text("Label", "Label");

  return (
    <Row>
      <Col sm="6">
        <FormGroup check className="m-3">
          <Toggle
            label={`${label} ${checked ? "Selezionato" : ""}  ${
              disabled ? "Disabilitato" : ""
            }`}
            disabled={disabled}
            checked={checked}
            onChange={() => {}}
          />
        </FormGroup>
      </Col>
      <Col sm="6">
        <FormGroup check className="m-3">
          <Toggle
            label={`${label} inverso ${!checked ? "Selezionato" : ""}  ${
              disabled ? "Disabilitato" : ""
            }`}
            disabled={disabled}
            checked={!checked}
            onChange={() => {}}
          />
        </FormGroup>
      </Col>
    </Row>
  );
});
