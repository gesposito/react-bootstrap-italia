import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  FormText,
  Button
} from "reactstrap";
import PasswordInput from "./PasswordInput";
import FormGroupWithActive from "./FormGroupWithActive";

import FormInputFileExample from "./FormInputFileExample";
import FormGroupsExample from "./FormGroupsExample";
import FormSizingExample from "./FormSizingExample";
import FormInputPasswordExample from "./FormInputPasswordExample";

import SelectExample from "../Select/SelectExample";
import Select from "../Select/Select";
import CheckboxGroupsExample from "../Checkbox/CheckboxGroupsExample";
import RadioGroupsExample from "../Radio/RadioGroupsExample";
import AutocompleteExample from "../Autocomplete/AutocompleteExample";
import TogglesExample from "../Toggle/TogglesExample";
import TogglesGroupsExample from "../Toggle/TogglesGroupsExample";

storiesOf("Componenti/Form", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Input text", () => (
    <Form>
      <InputGroup className="pb-3">
        <InputGroupAddon addonType="prepend">
          <span className="input-group-text it-search" id="basic-addon1" />
        </InputGroupAddon>
        <Input type="text" placeholder="Username" />
      </InputGroup>
      <FormGroupWithActive>
        <Input type="text" name="text" id="exampleInputText" />
        <Label for="exampleInputText">Nominativo</Label>
      </FormGroupWithActive>
      <FormGroupWithActive>
        <Input type="number" name="number" id="exampleInputNumber" />
        <Label for="exampleInputNumber">Numero partecipanti</Label>
      </FormGroupWithActive>
      <FormGroupWithActive>
        <Input type="email" name="email" id="exampleInputEmail1" />
        <Label for="exampleInputEmail1">Numero partecipanti</Label>
        <FormText color="muted">
          Non condivideremo mai la tua email con nessun altro.
        </FormText>
      </FormGroupWithActive>
    </Form>
  ))
  .add("Input password", () => <FormInputPasswordExample />)
  .add("Input file", () => <FormInputFileExample />)
  .add("Input autocomplete", () => <AutocompleteExample />)
  .add("Select", () => <SelectExample />)
  .add("Select multipla", () => <SelectExample multi />)
  .add("Select con ricerca", () => <SelectExample search />)
  .add("Select con gruppi di opzioni", () => <SelectExample group multi />)
  .add("Textarea", () => (
    <Form>
      <FormGroupWithActive>
        <Input type="textarea" name="text" id="exampleText" rows="3" />
        <Label for="exampleText">Example textarea</Label>
      </FormGroupWithActive>
    </Form>
  ))
  .add("Personalizzazioni", () => (
    <Form>
      <FormGroupWithActive className="m-3">
        <i className="ico-prefix it-youtube" />
        <Input type="text" id="videoYoutube" />
        <Label for="videoYoutube">Link video di youtube</Label>
      </FormGroupWithActive>
      <SelectExample icon />
    </Form>
  ))
  .add("Dimensioni", () => (
    <section>
      <Form className="m-3">
        <Input placeholder="lg" bsSize="lg" />
        <Input placeholder="Input predefinito" />
        <Input placeholder="sm" bsSize="sm" />
      </Form>

      <Form className="m-3">
        <Select
          bsSize="lg"
          placeholder="Select grande"
          options={[{ value: "", label: "Select grande" }]}
        />
        <Select
          placeholder="Select predefinita"
          options={[{ value: "", label: "Select predefinita" }]}
        />
        <Select
          bsSize="sm"
          placeholder="Select piccola"
          options={[{ value: "", label: "Select piccola" }]}
        />
      </Form>
    </section>
  ))
  .add("Readonly", () => (
    <Form className="m-3">
      <Input type="text" placeholder="Contenuto in sola lettura" readOnly />
    </Form>
  ))
  .add("Readonly normalizzato", () => (
    <Form className="m-3">
      <FormGroupWithActive>
        <Input plaintext readOnly id="staticEmail">
          email@example.com
        </Input>
        <Label for="staticEmail">Email</Label>
      </FormGroupWithActive>
    </Form>
  ))
  .add("Checkbox e radio", () => (
    <Form className="m-3">
      <FormGroup check>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1" check>
          Checkbox di esempio
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
        <Label check for="radio1">
          Radio di esempio 1
        </Label>
      </FormGroup>

      <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">
          Radio di esempio 2
        </Label>
      </FormGroup>
    </Form>
  ))
  .add("Inline", () => (
    <section>
      <Form className="m-3">
        <FormGroup check inline>
          <Input id="checkbox1" type="checkbox" />
          <Label for="checkbox1" check>
            Checkbox non selezionato
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input id="checkbox2" type="checkbox" defaultChecked />
          <Label for="checkbox2" check>
            Checkbox selezionato
          </Label>
        </FormGroup>
      </Form>

      <Form className="m-3">
        <FormGroup check inline>
          <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
          <Label check for="radio1">
            Opzione 1
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input name="gruppo1" type="radio" id="radio2" />
          <Label check for="radio2">
            Opzione 2
          </Label>
        </FormGroup>
      </Form>
    </section>
  ))
  .add("Disabilitato", () => (
    <section>
      <Form className="m-3">
        <FormGroup check>
          <Input disabled id="checkbox1" type="checkbox" />
          <Label for="checkbox1" check>
            Checkbox disabilitato non selezionato
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled id="checkbox2" type="checkbox" defaultChecked />
          <Label for="checkbox2" check>
            Checkbox disabilitato selezionato
          </Label>
        </FormGroup>
      </Form>

      <Form className="m-3">
        <FormGroup check>
          <Input
            disabled
            name="gruppo1"
            type="radio"
            id="radio1"
            defaultChecked
          />
          <Label check for="radio1">
            Opzione disabilitata selezionata
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled name="gruppo1" type="radio" id="radio2" />
          <Label check for="radio2">
            Opzione disabilitata non selezionata
          </Label>
        </FormGroup>
      </Form>
    </section>
  ))
  .add("Gruppi", () => (
    <section>
      <CheckboxGroupsExample />
      <RadioGroupsExample />
    </section>
  ))
  .add("Toggles", () => <TogglesExample />)
  .add("Toggles Disabilitate", () => <TogglesExample disabled />)
  .add("Gruppi di Toggles", () => <TogglesGroupsExample />);

storiesOf("Componenti/Form/Layout", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .add("Form group", () => (
    <Form>
      <FormGroupWithActive>
        <Label for="FormGroupExampleInput">Esempio di etichetta</Label>
        <Input type="text" name="text" id="FormGroupExampleInput" />
      </FormGroupWithActive>
      <FormGroupWithActive>
        <Label for="FormGroupExampleInput2">Altro esempio di etichetta</Label>
        <Input type="text" name="text" id="FormGroupExampleInput2" />
      </FormGroupWithActive>
    </Form>
  ))
  .add("Form a griglia", () => (
    <section>
      <Form>
        <Row className="m-3">
          <FormGroupWithActive col>
            <Label for="formNome">Nome</Label>
            <Input type="text" name="text" id="formNome" />
          </FormGroupWithActive>
          <FormGroupWithActive col>
            <Label for="formCognome">Cognome</Label>
            <Input type="text" name="text" id="formCognome" />
          </FormGroupWithActive>
        </Row>
      </Form>

      <FormGroupsExample />
    </section>
  ))
  .add("Dimensione delle colonne", () => (
    <section>
      <Form className="m-3">
        <div className="form-row">
          <FormGroupWithActive className="col-7">
            <Label for="Citta" sm={7}>
              Città
            </Label>
            <Input type="text" id="Citta" />
          </FormGroupWithActive>
          <FormGroupWithActive col>
            <Label for="Comune" sm={1}>
              Comune
            </Label>
            <Input type="text" id="Comune" />
          </FormGroupWithActive>
          <FormGroupWithActive col>
            <Label for="CAP" sm={1}>
              CAP
            </Label>
            <Input type="text" id="CAP" />
          </FormGroupWithActive>
        </div>
      </Form>
    </section>
  ))
  .add("Auto-dimensionamento", () => <FormSizingExample />)
  .add("Inline forms", () => (
    <section>
      <FormSizingExample inline />

      <Form inline className="m-3">
        <Label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Preference
        </Label>
        <Select
          id="inlineFormCustomSelectPref"
          placeholder="Choose..."
          options={[
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" }
          ]}
        />

        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <Input
            type="checkbox"
            id="customControlInline"
            className="custom-control-input"
          />
          <Label className="custom-control-label" for="customControlInline">
            Remember my preference
          </Label>
        </div>

        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  ))
  .add("Testo di aiuto", () => (
    <section>
      <Form className="m-2">
        <FormGroup>
          <PasswordInput id="inputPassword5" className="form-control" />
          <Label for="inputPassword5">Password</Label>
          <FormText id="passwordHelpBlock" color="muted">
            La tua password deve essere lunga 8-20 caratteri, contenere lettere
            e numeri e non deve contenere spazi, caratteri speciali o emoji.
          </FormText>
        </FormGroup>
      </Form>

      <Form inline>
        <FormGroup>
          <PasswordInput id="inputPassword6" className="mx-sm-3" />
          <Label for="inputPassword6">Password</Label>
          <FormText id="passwordHelpInline" color="muted">
            Deve essere lunga 8-20 caratteri.
          </FormText>
        </FormGroup>
      </Form>
    </section>
  ))
  .add("Form disabilitato", () => (
    <section className="m-3">
      <Form>
        <fieldset disabled>
          <FormGroup>
            <Input
              id="disabledTextInput"
              type="text"
              placeholder="Disabled input"
              disabled
            />
            <Label for="disabledTextInput">Input </Label>
          </FormGroup>

          <FormGroup>
            <Select
              id="exampleSelect"
              placeholder="Scegli..."
              options={[{ value: "", label: "..." }]}
              disabled
            />
            <Label for="exampleSelect">Select disabilitata</Label>
          </FormGroup>

          <FormGroup>
            <select id="disabledSelect" className="form-control">
              <option>Disabled select</option>
            </select>
            <Label for="disabledSelect">Select default disabilitata</Label>
          </FormGroup>

          <div className="form-check-label">
            <Input type="checkbox" id="disabledFieldsetCheck" disabled />
            <Label check for="disabledFieldsetCheck">
              Check disabilitato
            </Label>
          </div>
          <Button color="primary" className="mt-3" type="submit" disabled>
            Submit
          </Button>
        </fieldset>
      </Form>
    </section>
  ));
