import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Nav, NavItem, NavLink } from "reactstrap";

import TabExample from "./TabExample";
import TabButtonExample from "./TabButtonExample";

storiesOf("Componenti/Tab", module)
  // .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(withScreenshot())
  .add("Esempi", () => (
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
  ))
  .add("Contenuto", () => <TabExample text />)
  .add("Icone", () => <TabExample icons />)
  .add("Icone e testo", () => <TabExample text icons />)
  .add("Tab a bottoni", () => <TabButtonExample />)
  .add("Allineamento Verticale", () => <TabButtonExample vertical />);
