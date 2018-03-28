import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  UncontrolledTooltip,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

class PopoverExample extends React.Component {
  state = {
    modal: false,
    popoverOpen: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" id="Example" onClick={this.togglePopover}>
          Clicca par attivare/disattivare il popover
        </Button>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Example"
          toggle={this.togglePopover}
        >
          <PopoverHeader>Titolo del popover</PopoverHeader>
          <PopoverBody>
            Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non
            trovi?
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverExample;
