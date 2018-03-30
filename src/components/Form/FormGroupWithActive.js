import React, { Component } from "react";

import { FormGroup, Input, Label } from "reactstrap";

class FormGroupWithActive extends Component {
  state = {
    active: this.props.active || false
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
    const { children, className, col, ...rest } = this.props;

    const renderChildren = () => {
      let isLabelActive = false;
      return React.Children.map(children, child => {
        const { onFocus, onBlur, className } = child.props;

        switch (child.type) {
          case Input:
            if (child.props.value) {
              isLabelActive = true;
            }

            return React.cloneElement(child, {
              ...child.props,
              onFocus: () => {
                this.onFocus(onFocus);
              },
              onBlur: () => {
                this.onBlur(onBlur);
              }
            });
            break;
          case Label:
            const classNames = isLabelActive
              ? [className, "active"].join(" ")
              : className;

            return React.cloneElement(child, {
              ...child.props,
              className: classNames
            });
            break;
          default:
            return child;
            break;
        }
      });
    };

    const classNames = [
      className,
      active ? "active" : "",
      col ? "col" : ""
    ].join(" ");

    return (
      <FormGroup {...rest} className={classNames}>
        {renderChildren()}
      </FormGroup>
    );
  }
}

export default FormGroupWithActive;
