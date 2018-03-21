import { configure } from "@storybook/react";
import { setDefaults } from '@storybook/addon-info';

import "bootstrap-italia/dist/css/bootstrap-italia.css";
import "bootstrap-italia/dist/css/italia-icon-font.css";
import "../src/assets/css/docs.min.css";

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
