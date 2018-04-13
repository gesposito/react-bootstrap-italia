import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { withScreenshot } from "storybook-chrome-screenshot";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const stories = storiesOf("Componenti/Breadcrumb", module);
stories.addDecorator((story, context) => withInfo("")(story)(context))
stories.addDecorator(withScreenshot());
stories.add("Esempi", () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
));
