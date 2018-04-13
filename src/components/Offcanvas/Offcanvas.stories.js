import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Viewport } from "@storybook/addon-viewport";
import { withScreenshot } from "storybook-chrome-screenshot";

import OffcanvasExample from "./OffcanvasExample";

const stories = storiesOf("Componenti/Offcanvas", module);
stories.addDecorator(
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
);
stories.add("Esempio", () => (
  <Viewport name="iphone6">
    <OffcanvasExample />
  </Viewport>
));
