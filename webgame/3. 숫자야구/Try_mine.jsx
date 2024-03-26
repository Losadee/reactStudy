import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.value}</b> - {this.props.result}
      </li>
    );
  }
}

export default Try;
