import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from "reactstrap";

class ModalGridExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <div>
        <Button color="primary" onClick={this.toggle}>
          Lancia la demo della modale
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Le griglie nelle modali
          </ModalHeader>
          <ModalBody>
            <Container fluid className="bd-example-row">
              <Row>
                <Col md="4">.col-md-4</Col>
                <Col md="4" className="col-md-4 ml-auto">
                  .col-md-4 .ml-auto
                </Col>
              </Row>
              <Row>
                <Col md="3" className="col-md-3 ml-auto">
                  .col-md-3 .ml-auto
                </Col>
                <Col md="2" className="col-md-2 ml-auto">
                  .col-md-2 .ml-auto
                </Col>
              </Row>
              <Row>
                <Col md="6" className="col-md-6 ml-auto">
                  .col-md-6 .ml-auto
                </Col>
              </Row>
              <Row>
                <Col sm="9">
                  Level 1: .col-sm-9
                  <Row>
                    <Col md="8" sm="6">
                      Level 2: .col-8 .col-sm-6
                    </Col>
                    <Col md="4" sm="6">
                      Level 2: .col-4 .col-sm-6
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Chiudi
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Salva le modifiche
            </Button>
          </ModalFooter>
        </Modal>
      </div>;
  }
}

export default ModalGridExample;
