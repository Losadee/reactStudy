const React = require("react");
const { useState, useRef } = React;

const Gugudan = () => {
  // 함수형 컴포넌트 X 함수 컴포넌트 O
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const onChanegeValue = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (value == first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      setResult(`${first} x ${second} = ${value} 정답!`);
      inputRef.current.focus();
      return;
    }
    setResult("땡!");
    setValue("");
    inputRef.current.focus();
  };
  const inputRef = useRef(null);
  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChanegeValue}
          type="number"
          value={value}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = Gugudan;
