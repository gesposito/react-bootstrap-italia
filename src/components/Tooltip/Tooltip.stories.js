import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Tooltip, UncontrolledTooltip, Button } from "reactstrap";

storiesOf("Componenti/Tooltip", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <div className="bd-example tooltip-demo">
      <p className="muted">
        Ecco un{" "}
        <a href="#" id="Example1">
          bianco scenario
        </a>
        <br />
        per tratteggiarvi l’accompagnamento
        <br />
        degli oggetti di sfondo che pur vivono.
        <br />
        Non ne sarò{" "}
        <a href="#" id="Example2">
          l’artefice
        </a>
        impaziente.
        <br />
        Berrò alle coppe della nostalgia,
        <br />
        avrò preteso d’ozio nelle lacrime...
        <br />
        perché non mi ribello alla natura:
        <br />
        la mia lentezza li esaspera...
        <br />
        La mia lentezza? No, la mia fiducia.
        <br />
        Per adesso è deserto.
        <br />
        <a href="#" id="Example3">
          Il mondo può rifarsi senza me
        </a>,
        <br />
        E intanto gli altri mi denigreranno
      </p>
      <p>
        <em>La città nuova, Alda Merini</em>
      </p>

      <UncontrolledTooltip placement="top" target="Example1">
        Primo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target="Example2">
        Secondo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target="Example3">
        Terzo tooltip
      </UncontrolledTooltip>
    </div>
  ))
  .add("Posizioni", () => (
    <div style={{ padding: 100 }}>
      <Button id="Example1" className="m-3">
        Tooltip in alto
      </Button>
      <Button id="Example2" className="m-3">
        Tooltip a destra
      </Button>
      <Button id="Example3" className="m-3">
        Tooltip in basso
      </Button>
      <Button id="Example4" className="m-3">
        Tooltip a sinistra
      </Button>
      <Button id="Example5" className="m-3">
        Tooltip con HTML
      </Button>

      <UncontrolledTooltip placement="top" target="Example1">
        Tooltip on top
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="right" target="Example2">
        Tooltip on right
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="bottom" target="Example3">
        Tooltip on bottom
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="left" target="Example4">
        Tooltip on left
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target="Example5">
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
      </UncontrolledTooltip>
    </div>
  ));
