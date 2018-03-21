import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

storiesOf("Componenti/Pagination", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Esempi", () => (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ))
  .add("Stato disabilitato e attivo", () => (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ))
  .add("Dimensione e allineamento", () => (
    <div>
      <Pagination size="lg" className="mb-3">
        <PaginationItem disabled>
          <PaginationLink previous href="#">
            <span className="it-chevron-left" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
            <span className="it-chevron-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>

      <Pagination size="sm" className="justify-content-end mb-3">
        <PaginationItem disabled>
          <PaginationLink previous href="#">
            <span className="it-chevron-left" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
            <span className="it-chevron-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  ))
  .add("Responsive", () => (
    <Pagination className="mb-3">
      <PaginationItem>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <span class="p-3">...</span>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">9</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">10</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">11</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">12</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">13</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <span class="p-3">...</span>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ));
