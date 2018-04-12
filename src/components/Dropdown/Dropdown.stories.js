import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

import DropdownExample from "./DropdownExample";
import DropdownButtonExample from "./DropdownButtonExample";
import DropdownButtonGroupExample from "./DropdownButtonGroupExample";
import DropdownSizingExample from "./DropdownSizingExample";
import DropdownFullSizingExample from "./DropdownFullSizingExample";
import DropdownDirectionsExample from "./DropdownDirectionsExample";
import DropdownAlignmentExample from "./DropdownAlignmentExample";

storiesOf("Componenti/Dropdown", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => <DropdownExample />)
  .add("Bottoni", () => <DropdownButtonExample />)
  .add("Variante Bottoni", () => <DropdownButtonExample color="danger" />)
  .add("Bottoni divisi", () => <DropdownButtonGroupExample />)
  .add("Dimensioni", () => <DropdownSizingExample />)
  .add("Dropdown a tutta larghezza", () => <DropdownFullSizingExample />)
  .add("Direzioni Dropdown", () => <DropdownDirectionsExample />)
  .add("Allineamento orizzontale", () => <DropdownAlignmentExample />)
  .add("Voci di menù attive", () => (
    <div style={{ paddingBottom: 150 }}>
      <Dropdown isOpen toggle={() => {}}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem active>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
  .add("Voci di menù disabilitate", () => (
    <div style={{ paddingBottom: 150 }}>
      <Dropdown isOpen toggle={() => {}}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem disabled>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ));
