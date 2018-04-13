import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Nav, NavLink, NavItem } from "reactstrap";

const stories = storiesOf("Componenti/Nav", module);
// .addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => (
  <div>
    <Nav className="mb-3">
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
    <Nav pills>
      <NavItem>
        <NavLink active href="#">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  </div>
));
stories.add("Allineamento", () => (
  <div>
    <Nav className="justify-content-center mb-3">
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
    <Nav className="justify-content-end mb-3">
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
    <Nav vertical>
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
  </div>
));
stories.add("Menù a tab", () => (
  <Nav tabs>
    <NavLink active href="#">
      Link Attivo
    </NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink disabled href="#">
      Link Disabilitato
    </NavLink>
  </Nav>
));
stories.add("Menù a bottoni", () => (
  <Nav pills>
    <NavLink active href="#">
      Link Attivo
    </NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink disabled href="#">
      Link Disabilitato
    </NavLink>
  </Nav>
));
stories.add("“fill” e “justify”", () => (
  <div>
    <Nav pills fill className="mb-3">
      <NavLink active href="#">
        Link con molto testo Attivo
      </NavLink>
      <NavLink href="#">Link con molto testo</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
    <Nav pills justified>
      <NavLink active href="#">
        Link con molto testo Attivo
      </NavLink>
      <NavLink href="#">Link con molto testo</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
  </div>
));
