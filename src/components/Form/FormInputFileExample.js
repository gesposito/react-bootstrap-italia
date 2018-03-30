import React, { Component } from "react";

import { Form, Label, Input } from "reactstrap";

import FormGroupWithActive from "./FormGroupWithActive";

class FormInputFileExample extends Component {
  state = {
    fileName: "",
    fileNames: ""
  };

  getFileName = file => {
    const { name, size } = file;
    return `${name} (${Math.floor(size / 1024)}kb); `;
  };

  onFileUpdate = ({ target }) => {
    const fileName = this.getFileName(target.files[0]);
    this.setState({
      fileName
    });
  };

  onMultipleFileUpdate = ({ target }) => {
    const fileNames = Object.keys(target.files).map(i => {
      return this.getFileName(target.files[i]);
    });
    this.setState({
      fileNames
    });
  };

  render() {
    return (
      <Form>
        <FormGroupWithActive>
          <Input type="file" id="exampleFormControlFile" />
          <Label for="exampleFormControlFile">
            Esempio campo senza personalizzazione grafica
          </Label>
        </FormGroupWithActive>
        <FormGroupWithActive className="form-file">
          <Input type="file" id="file" onChange={this.onFileUpdate} />
          <Label for="file">
            Esempio campo per l'upload di un singolo file
          </Label>
          <span className="form-file-name">{this.state.fileName}</span>
        </FormGroupWithActive>
        <FormGroupWithActive className="form-file">
          <Input
            type="file"
            id="fileM"
            multiple
            onChange={this.onMultipleFileUpdate}
          />
          <Label for="fileM">Esempio campo per l'upload multiplo di file</Label>
          <span className="form-file-name">{this.state.fileNames}</span>
        </FormGroupWithActive>
      </Form>
    );
  }
}

export default FormInputFileExample;
