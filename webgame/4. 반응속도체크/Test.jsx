import React, { useState } from "react";

const Test = () => {
  const [number, setNumber] = useState(0);

  const onClick = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    // setNumber((prev) => prev + 1);
    // setNumber((prev) => prev + 1);
    // setNumber((prev) => prev + 1);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={onClick}>클릭!</button>
    </>
  );
};

export default Test;
