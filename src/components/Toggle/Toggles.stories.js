import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

import Toggle from "./Toggle";

import TogglesExample from "./TogglesExample";
import TogglesGroupsExample from "./TogglesGroupsExample";

storiesOf("Componenti/Toggles", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <section>
      <TogglesExample />
    </section>
  ))
  .add("Disabilitati", () => (
    <section>
      <TogglesExample disabled />
    </section>
  ))
  .add("Gruppi", () => (
    <section>
      <TogglesGroupsExample />
    </section>
  ))
  .add("Esempi con markup", () => (
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
