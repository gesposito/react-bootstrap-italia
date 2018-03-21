import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import ModalExample from "./ModalExample";
import ModalTooltipExample from "./ModalTooltipExample";
import ModalGridExample from "./ModalGridExample";

storiesOf("Componenti/Modal", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <div style={{ padding: "100px 300px" }}>
      <div className="modal-content">
        <ModalHeader>Titolo della modale</ModalHeader>
        <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
        <ModalFooter>
          <Button color="secondary">Chiudi</Button>
          <Button color="primary">Salva le modifiche</Button>
        </ModalFooter>
      </div>
    </div>
  ))
  .add("Bottone di chiusura", () => (
    <div style={{ position: "relative", padding: 10 }}>
      <Button className="close" style={{ position: "absolute" }}>
        &times;
      </Button>
    </div>
  ))
  .add("Demo", () => <ModalExample />)
  .add("Scroll di contenuti lunghi", () => <ModalExample long />)
  .add("Centratura verticale", () => <ModalExample centered />)
  .add("Tooltip and popover", () => <ModalTooltipExample />)
  .add("Uso della griglia", () => <ModalGridExample />)
  .add("Rimuovere l’animazione", () => <ModalExample fade={false} />)
  .add("Dimensioni", () => <ModalExample sizing />);
