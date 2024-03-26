import React, { Component } from "react";

class Try extends Component {
  constructor(props) {
    super(props);
    // 다른 동작
    const filtered = this.props.filtered(() => {});
    // filter 처리된 값을 넣어줄 수 있음
    this.state = {
      result: filtered,
      try: this.props.try,
    };
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
