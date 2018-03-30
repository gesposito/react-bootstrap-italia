import React, { Component } from "react";

import { FormGroup, Input } from "reactstrap";

class FormGroupWithActive extends Component {
  state = {
    active: this.props.active
  };

  onFocus = (callback, active = true) => {
    this.setState(
      {
        active
      },
      () => {
        callback && callback();
      }
    );
  };

  onBlur = (callback, active = false) => {
    this.setState(
      {
        active
      },
      () => {
        callback && callback();
      }
    );
  };

  render() {
    const { active } = this.state;
    const { children, className } = this.props;

    return (
      <FormGroup
        {...this.props}
        className={`${className} ${active ? "active" : ""}`}
      >
        {React.Children.map(children, child => {
          if (child.type === Input) {
            const { onFocus, onBlur } = child.props;

            return React.cloneElement(child, {
              ...child.props,
              onFocus: () => {
                this.onFocus(onFocus);
              },
              onBlur: () => {
                this.onBlur(onBlur);
              }
            });
          }
          return child;
        })}
      </FormGroup>
    );
  }
}

export default FormGroupWithActive;
