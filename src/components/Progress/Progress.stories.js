import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Progress } from "reactstrap";

storiesOf("Componenti/Progress", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => (
    <div>
      <Progress />
      <Progress value="25" className="mt-3" />
      <Progress value={50} className="mt-3" />
      <Progress value={75} className="mt-3" />
      <Progress value="100" className="mt-3" />
    </div>
  ))
  .add("Etichette", () => <Progress value="25">25%</Progress>)
  .add("Altezza", () => (
    <div>
      <Progress value="25" style={{ height: 1 }} />
      <Progress value="25" style={{ height: 10 }} className="mt-3" />
      <Progress value="25" style={{ height: 20 }} className="mt-3" />
    </div>
  ))
  .add("Background", () => (
    <div>
      <Progress color="success" value="25" className="mt-3" />
      <Progress color="info" value={50} className="mt-3" />
      <Progress color="warning" value={75} className="mt-3" />
      <Progress color="danger" value="100" className="mt-3" />
    </div>
  ));
