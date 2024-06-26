const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("이다솔!");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const onRefInput = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      onRefInput.current.focus();
    } else {
      setResult("땡");
      setValue("");
      onRefInput.current.focus();
    }
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          className="wordInput"
          ref={onRefInput}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
        <div>{result}</div>
      </form>
    </>
  );
};

module.exports = WordRelay;
