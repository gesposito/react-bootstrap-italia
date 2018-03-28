import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";

storiesOf("Componenti/Checkbox", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <Form>
      <FormGroup check>
        <input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Label di esempio
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Inline", () => (
    <Form>
      <FormGroup check inline>
        <input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox non selezionato
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <input id="checkbox2" type="checkbox" defaultChecked />
        <Label for="checkbox2" check>
          Checkbox selezionato
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Disabilitate", () => (
    <Form>
      <FormGroup check>
        <input id="checkbox1" type="checkbox" disabled />
        <Label for="checkbox1" check>
          Checkbox disabilitato non selezionato
        </Label>
      </FormGroup>
      <FormGroup check>
        <input id="checkbox2" type="checkbox" disabled defaultChecked />
        <Label for="checkbox2" check>
          Checkbox disabilitato selezionato
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Gruppi di Checkbox", () => (
    <Row className="m-5">
      <Col md={5}>
        <Form>
          <FormGroup check className="form-check-group">
            <input id="checkbox1" type="checkbox" defaultChecked />
            <Label for="checkbox1" check>
              Checkbox selezionato
            </Label>
          </FormGroup>
          <FormGroup check className="form-check-group">
            <input id="checkbox2" type="checkbox" />
            <Label for="checkbox2" check>
              Checkbox non selezionato
            </Label>
          </FormGroup>
          <FormGroup check className="form-check-group">
            <input id="checkbox3" type="checkbox" disabled />
            <Label for="checkbox3" check>
              Checkbox disabilitato non selezionato
            </Label>
          </FormGroup>
        </Form>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <Form>
          <FormGroup check className="form-check-group">
            <input id="checkbox1" type="checkbox" defaultChecked />
            <Label for="checkbox1" check>
              Checkbox selezionato
            </Label>
            <FormText color="muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
          <FormGroup check className="form-check-group">
            <input id="checkbox2" type="checkbox" />
            <Label for="checkbox2" check>
              Checkbox non selezionato
            </Label>
            <FormText color="muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
          <FormGroup check className="form-check-group">
            <input id="checkbox2" type="checkbox" disabled />
            <Label for="checkbox2" check>
              Checkbox disabilitato non selezionato
            </Label>
            <FormText color="muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  ));
