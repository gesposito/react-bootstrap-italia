import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";
import { initScreenshot, withScreenshot } from "storybook-chrome-screenshot";

import "bootstrap-italia/dist/css/bootstrap-italia.css";
import "bootstrap-italia/dist/css/italia-icon-font.css";
import "../src/assets/css/docs.min.css";

// addon-info
// https://github.com/storybooks/storybook/tree/master/addons/info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component

  // propTables: [/* Components used in story */], // displays Prop Tables with this components
  // propTablesExclude: [], // Exclude Components from being shown in Prop Tables section. Accepts an array of component classes or functions.
  // styles: {}, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
  // components: {}, // Overrides components used to display markdown
  // maxPropsIntoLine: 1, // Max props to display per line in source code
  // maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  // maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  // maxPropStringLength: 100, // Displays the first 100 characters in the default prop string,
  // TableComponent: props => {}, // Override the component used to render the props table
});

// addon-options
// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  // name to display in the top left corner
  name: "React Bootstrap Italia",

  // URL for name in top left corner to link to
  url: "https://gesposito.github.io/react-bootstrap-italia/"

  // show story component as full screen
  // goFullScreen: false,

  // display panel that shows a list of stories
  // showStoriesPanel: true,

  // display panel that shows addon configurations
  // showAddonPanel: true,

  // display floating search box to search through stories
  // showSearchBox: false,

  // show addon panel as a vertical panel on the right
  // addonPanelInRight: false,

  // sorts stories
  // sortStoriesByKind: false,

  // regex for finding the hierarchy separator
  // @example:
  //   null - turn off hierarchy
  //   /\// - split by `/`
  //   /\./ - split by `.`
  //   /\/|\./ - split by `/` or `.`
  // hierarchySeparator: null,

  // regex for finding the hierarchy root separator
  // @example:
  //   null - turn off mulitple hierarchy roots
  //   /\|/ - split by `|`
  // hierarchyRootSeparator: null,

  // sidebar tree animations
  // sidebarAnimations: true,

  // id to select an addon panel
  // selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook

  // enable/disable shortcuts
  // enableShortcuts: false // true by default
});

addDecorator(initScreenshot());

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
