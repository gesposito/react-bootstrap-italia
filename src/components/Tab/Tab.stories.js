import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Nav, NavItem, NavLink } from "reactstrap";

import TabExample from "./TabExample";
import TabButtonExample from "./TabButtonExample";

const stories = storiesOf("Componenti/Tab", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => (
  <div>
    <Nav tabs className="mb-3">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>

    <Nav tabs className="nav-dark">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>
  </div>
));
stories.add("Contenuto", () => <TabExample text />);
stories.add("Icone", () => <TabExample icons />);
stories.add("Icone e testo", () => <TabExample text icons />);
stories.add("Tab a bottoni", () => <TabButtonExample />);
stories.add("Allineamento Verticale", () => <TabButtonExample vertical />);
