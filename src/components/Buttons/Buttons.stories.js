import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import "bootstrap-italia/dist/css/bootstrap-italia.css";
import { Button } from "reactstrap";

storiesOf("Componenti/Button", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <div>
      <Button color="italia" className="mr-1">
        Italia
      </Button>
      <Button color="primary" className="mr-1">
        Primary
      </Button>
      <Button color="secondary" className="mr-1">
        Secondary
      </Button>
      <Button color="tertiary" className="mr-1">
        Tertiary
      </Button>
      <Button color="quaternary" className="mr-1">
        Quaternary
      </Button>
      <Button color="success" className="mr-1">
        Success
      </Button>
      <Button color="info" className="mr-1">
        Info
      </Button>
      <Button color="danger" className="mr-1">
        Danger
      </Button>
      <Button color="warning" className="mr-1">
        Warning
      </Button>
      <Button color="link" className="mr-1">
        Link
      </Button>
    </div>
  ))
  .add("Dimensioni", () => (
    <section>
      <div>
        <Button color="primary" size="lg">
          Large Button
        </Button>{" "}
        <Button color="secondary" size="lg">
          Large Button
        </Button>
        <div className="mt-3" />
        <Button color="primary" size="sm">
          Small Button
        </Button>{" "}
        <Button color="secondary" size="sm">
          Small Button
        </Button>
        <div className="mt-3" />
        <Button color="primary" block>
          Block level button
        </Button>
        <Button color="secondary" block>
          Block level button
        </Button>
      </div>
    </section>
  ))
  .add("Stato Attivo", () => (
    <div>
      <Button color="italia" active className="mr-1">
        Italia
      </Button>
      <Button color="primary" active className="mr-1">
        Primary
      </Button>
      <Button color="secondary" active className="mr-1">
        Secondary
      </Button>
      <Button color="tertiary" active className="mr-1">
        Tertiary
      </Button>
      <Button color="quaternary" active className="mr-1">
        Quaternary
      </Button>
      <Button color="success" active className="mr-1">
        Success
      </Button>
      <Button color="info" active className="mr-1">
        Info
      </Button>
      <Button color="danger" active className="mr-1">
        Danger
      </Button>
      <Button color="warning" active className="mr-1">
        Warning
      </Button>
      <Button color="link" active className="mr-1">
        Link
      </Button>
    </div>
  ))
  .add("Stato Disabilitato", () => (
    <div>
      <Button color="italia" disabled className="mr-1">
        Italia
      </Button>
      <Button color="primary" disabled className="mr-1">
        Primary
      </Button>
      <Button color="secondary" disabled className="mr-1">
        Secondary
      </Button>
      <Button color="tertiary" disabled className="mr-1">
        Tertiary
      </Button>
      <Button color="quaternary" disabled className="mr-1">
        Quaternary
      </Button>
      <Button color="success" disabled className="mr-1">
        Success
      </Button>
      <Button color="info" disabled className="mr-1">
        Info
      </Button>
      <Button color="danger" disabled className="mr-1">
        Danger
      </Button>
      <Button color="warning" disabled className="mr-1">
        Warning
      </Button>
      <Button color="link" disabled className="mr-1">
        Link
      </Button>
    </div>
  ));
