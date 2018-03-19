import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Badge, Button } from "reactstrap";

storiesOf("Componenti/Badge", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <div>
      <h1>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h1>
      <h2>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h2>
      <h3>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h3>
      <h4>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h4>
      <h5>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h5>
      <h6>
        Titolo di esempio <Badge color="secondary">New</Badge>
      </h6>
    </div>
  ))
  .add("Contatore", () => (
    <Button color="primary">
      Notifiche <Badge color="secondary">4</Badge>
    </Button>
  ))
  .add("Variazioni", () => (
    <div>
      <Badge color="italia">Italia</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="tertiary">Tertiary</Badge>
      <Badge color="quaternary">Quaternary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
    </div>
  ))
  .add("Arrotondati", () => (
    <div>
      <Badge color="italia" pill>
        Italia
      </Badge>
      <Badge color="primary" pill>
        Primary
      </Badge>
      <Badge color="secondary" pill>
        Secondary
      </Badge>
      <Badge color="tertiary" pill>
        Tertiary
      </Badge>
      <Badge color="quaternary" pill>
        Quaternary
      </Badge>
      <Badge color="success" pill>
        Success
      </Badge>
      <Badge color="danger" pill>
        Danger
      </Badge>
      <Badge color="warning" pill>
        Warning
      </Badge>
    </div>
  ))
  .add("Link", () => (
    <div>
      <Badge href="#" color="italia">
        Italia
      </Badge>
      <Badge href="#" color="primary">
        Primary
      </Badge>
      <Badge href="#" color="secondary">
        Secondary
      </Badge>
      <Badge href="#" color="tertiary">
        Tertiary
      </Badge>
      <Badge href="#" color="quaternary">
        Quaternary
      </Badge>
      <Badge href="#" color="success">
        Success
      </Badge>
      <Badge href="#" color="danger">
        Danger
      </Badge>
      <Badge href="#" color="warning">
        Warning
      </Badge>
    </div>
  ));