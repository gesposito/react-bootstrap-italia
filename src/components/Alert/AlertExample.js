import React from "react";
import { Alert } from "reactstrap";

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert
        color="warning"
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      </Alert>
    );
  }
}

export default AlertExample;
