import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Alert, UncontrolledAlert } from "reactstrap";

import AlertExample from "./AlertExample";

storiesOf("Componenti/Alert", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <div>
      <Alert color="success">
        Questo è un alert di <em>success</em>!
      </Alert>
      <Alert color="danger">
        Questo è un alert di <em>danger</em>!
      </Alert>
      <Alert color="warning">
        Questo è un alert di <em>warning</em>!
      </Alert>
    </div>
  ))
  .add("Link evidenziato", () => (
    <Alert color="danger">
      Questo è un alert con un esempio di{" "}
      <a href="#" className="alert-link">
        link
      </a>{" "}
      evidenziato.
    </Alert>
  ))
  .add("Contenuto aggiuntivo", () => (
    <Alert>
      <h4 className="alert-heading">Avviso di successo!</h4>
      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo
        testo di esempio sarà più a lungo in modo da poter vedere come funzioni
        la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p className="mb-0">
        Quando necessario, assicurarti di inserire le utilità di margine per
        mantenere gli spazi equilibrati.
      </p>
    </Alert>
  ));

storiesOf("Componenti/Alert/Chiusura", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Non controllata", () => (
    <UncontrolledAlert color="warning">
      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    </UncontrolledAlert>
  ))
  .add("Controllata", () => <AlertExample />);
