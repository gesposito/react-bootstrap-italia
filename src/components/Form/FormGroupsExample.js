import React, { Component } from "react";

import { Form, Label, Input, Row, Col } from "reactstrap";

import FormGroupWithActive from "./FormGroupWithActive";
import PasswordInput from "./PasswordInput";
import Select from "../Select/Select";

class FormGroupsExample extends Component {
  state = {
    address: "1234 Main St",
    secondaryAddress: "Apartment, studio, or floor"
  };

  onAddressChange = ({ target }) => {
    this.setState({
      address: target.value
    });
  };
  onSecomdaryAddressChange = ({ target }) => {
    this.setState({
      secondaryAddress: target.value
    });
  };

  render() {
    const { address, secondaryAddress } = this.state;
    const { onAddressChange, onSecomdaryAddressChange } = this;

    return (
      <Form className="m-3">
        <Row>
          <FormGroupWithActive className="col-md-6">
            <Input type="email" id="inputEmail4" />
            <Label for="inputEmail4">Email</Label>
          </FormGroupWithActive>
          <FormGroupWithActive className="col-md-6">
            <PasswordInput id="inputPassword4" />
            <Label for="inputPassword4">Password</Label>
          </FormGroupWithActive>
        </Row>

        <FormGroupWithActive>
          <Input
            type="text"
            id="inputAddress"
            value={address}
            onChange={onAddressChange}
          />
          <Label for="inputAddress">Indirizzo</Label>
        </FormGroupWithActive>
        <FormGroupWithActive>
          <Input
            type="text"
            id="inputAddress2"
            value={secondaryAddress}
            onChange={onSecomdaryAddressChange}
          />
          <Label for="inputAddress2">Indirizzo secondario</Label>
        </FormGroupWithActive>

        <div className="form-row">
          <FormGroupWithActive className="col-md-6">
            <Input type="text" id="inputCity" />
            <Label for="inputCity">Città</Label>
          </FormGroupWithActive>
          <FormGroupWithActive className="col-md-4">
            <Select
              placeholder="Scegli..."
              options={[{ value: "", label: "..." }]}
            />
            <Label for="inputState">Comune</Label>
          </FormGroupWithActive>
          <FormGroupWithActive className="col-md-2">
            <Input type="text" id="inputCAP" />
            <Label for="inputCAP">CAP</Label>
          </FormGroupWithActive>
        </div>

        <div className="form-row">
          <FormGroupWithActive check className="col-md-6">
            <Input id="checkbox1a" type="checkbox" />
            <Label for="checkbox1a">Attivazione</Label>
          </FormGroupWithActive>
          <FormGroupWithActive col>
            <Input type="text" id="campofac" />
            <Label for="campofac">Campo facoltativo</Label>
          </FormGroupWithActive>
        </div>
      </Form>
    );
  }
}

export default FormGroupsExample;
