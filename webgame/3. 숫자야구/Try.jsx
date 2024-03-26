import React, { PureComponent, memo } from "react";

// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <b>{tryInfo.try}</b> - {tryInfo.result}
//       </li>
//     );
//   }
// }

const Try = memo((tryInfo) => {
  return (
    <li>
      <b>{tryInfo.try}</b> - {tryInfo.result}
    </li>
  );
});

Try.displayName = "Try";

export default Try;
