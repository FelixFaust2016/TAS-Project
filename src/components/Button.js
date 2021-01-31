import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return <button className="login-btn">{this.props.name}</button>;
  }
}

export default Button;
