import React, { Component } from "react";

import { Form, Label, Input, FormText } from "reactstrap";

import PasswordInput from "./PasswordInput";
import FormGroupWithActive from "./FormGroupWithActive";
import PasswordMeter from "./PasswordMeter";

import testStrength from "./strength";

class FormInputPasswordExample extends Component {
  state = {
    passwordScore: 0
  };

  onPasswordChange = ({ target }) => {
    const passwordScore = testStrength(target.value) * 20;

    this.setState({
      passwordScore
    });
  };

  render() {
    const { passwordScore } = this.state;
    return (
      <Form>
        <FormGroupWithActive>
          <Input id="input" />
          <Label for="input">Password</Label>
        </FormGroupWithActive>
        <FormGroupWithActive>
          <PasswordInput id="exampleInputPassword" />
          <Label for="exampleInputPassword">Password</Label>
        </FormGroupWithActive>
        <FormGroupWithActive>
          <i className="ico-prefix it-lock" />
          <PasswordInput id="exampleInputPassword3" placeholder="Password" />
          <FormText id="infoPassword" color="muted">
            inserisci almeno 8 caratteri e una lettera maiuscola
          </FormText>
        </FormGroupWithActive>
        <FormGroupWithActive>
          <PasswordInput
            className="form-control form-password"
            id="exampleInputPassword2"
            onChange={this.onPasswordChange}
          />
          <Label for="exampleInputPassword2">Password con strength meter</Label>
          <PasswordMeter score={passwordScore} />
        </FormGroupWithActive>
      </Form>
    );
  }
}

export default FormInputPasswordExample;
