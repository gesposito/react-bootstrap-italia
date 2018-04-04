import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Viewport } from "@storybook/addon-viewport";

import OffcanvasExample from "./OffcanvasExample";

storiesOf("Componenti/Offcanvas", module).add("Esempio", () => (
  <Viewport name="iphone6">
    <OffcanvasExample />
  </Viewport>
));
