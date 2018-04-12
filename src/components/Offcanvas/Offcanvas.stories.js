import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Viewport } from "@storybook/addon-viewport";
import { withScreenshot } from "storybook-chrome-screenshot";

import OffcanvasExample from "./OffcanvasExample";

storiesOf("Componenti/Offcanvas", module)
  .addDecorator(
    withScreenshot({
      viewport: [
        // Mobile
        {
          width: 300,
          height: 420,
          isMobile: true,
          hasTouch: true
        }
      ]
    })
  )
  .add("Esempio", () => (
    <Viewport name="iphone6">
      <OffcanvasExample />
    </Viewport>
  ));
