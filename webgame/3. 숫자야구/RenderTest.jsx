import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  onClick = () => {
    const array = this.state.array;
    array.push(1);
    this.setState({ array: [...array, 1] });
    // console.log(this.state.array === [...array, 1]); // false => 랜더링 O
    // this.setState({ array: array });
    // console.log(this.state.array === array); // true => 랜더링 X
  };
  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
