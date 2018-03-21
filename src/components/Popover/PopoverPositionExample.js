import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return <span>
        <Button className="mr-1" color="secondary" id={"Popover-" + this.props.id} onClick={this.toggle}>
          Popover {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={"Popover-" + this.props.id} toggle={this.toggle}>
          <PopoverBody>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          </PopoverBody>
        </Popover>
      </span>;
  }
}

class PopoverPositionExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      popovers: [
        { placement: "top", text: "in alto" },
        { placement: "bottom", text: "in basso" },
        { placement: "left", text: "a sinistra" },
        { placement: "right", text: "a destra" }
      ] 
    };
  }

  render() {
    return <div style={{ padding: 200 }}>
        {this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>;
  }
}

export default PopoverPositionExample;
