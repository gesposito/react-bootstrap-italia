import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";

import ButtonGroupDropdownExample from "./ButtonGroupDropdownExample";

storiesOf("Componenti/Button Group", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
  .add("Toolbar", () => (
    <ButtonToolbar>
      <ButtonGroup className="mr-1">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-1">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-1">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ))
  .add("Dimensioni", () => (
    <section>
      <div>
        <ButtonGroup size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </section>
  ))
  .add("Vertical", () => (
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ));

storiesOf("Componenti/Button Group/Nesting", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => <ButtonGroupDropdownExample />);
