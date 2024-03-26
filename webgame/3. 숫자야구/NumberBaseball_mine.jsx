import React, { useState, useRef, useEffect } from "react";

import Try from "./Try";

const NumberBaseball = () => {
  function getNumbers() {
    let number = Math.ceil(Math.random() * 8999) + 1000 + "";
    if ([...new Set(number)].join("").length < 4) {
      return getNumbers();
    }
    console.log(number);
    setAnswer(number);
  }
  const [value, setValue] = useState([]);
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");
  const [tries, setTries] = useState([]);
  const isMounted = useRef(false);
  const onRefInput = useRef(null);
  useEffect(() => getNumbers(), []);
  useEffect(() => {
    if (isMounted.current && result !== "홈런!") {
      setTries([...tries, { value: value, result: result }]);
      setValue("");
    } else {
      isMounted.current = true;
    }
  }, [result]);

  const onSubmitForm = (e) => {
    debugger;
    e.preventDefault();
    if (value.length < 4 || value.length > 4) {
      setResult("4자리 숫자를 입력해 주세요.");
      onRefInput.current.focus();
      return;
    }
    let ball = 0;
    let strike = 0;
    answer.split("").map((v, i) => {
      if (value[i] === v) {
        strike += 1;
        return;
      }
      ball += answer.includes(value[i]) ? 1 : 0;
    });
    setResult(`ball : ${ball} \n strike : ${strike}`);

    if (strike === 4) {
      setTries([]);
      setValue("");
      setResult("홈런!");
      onRefInput.current.focus();
      getNumbers();
      return;
    }
    onRefInput.current.focus();
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={onRefInput}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.length !== 0 &&
          tries.map((v, i) => {
            return <Try value={v.value} key={i} result={v.result} />;
          })}
      </ul>
    </>
  );
};

export default NumberBaseball;
