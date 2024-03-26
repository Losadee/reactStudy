import React, { useState, useRef, useEffect } from "react";

import Try from "./Try";

const getNumbers = () => {
  console.log("=================> getNumbers() 실행");

  let number = Math.ceil(Math.random() * 8999) + 1000 + "";
  if ([...new Set(number)].join("").length < 4) {
    return getNumbers();
  }
  console.log(number);
  return number;
};
const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  // const [answer, setAnswer] = useState(() => {
  //   return getNumbers();
  // });
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);
  const onRefInput = useRef(null);
  const onSubmitForm = (e) => {
    e.preventDefault();
    // 정답일 때
    if (answer === value) {
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      onRefInput.current.focus();
      setTries([]);
      return;
    }
    // 10번 이상 틀렸을 때
    if (tries.length > 9) {
      setResult(`10번 이상 틀려서 실패! 답은 ${answer}였습니다.`);
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      return;
    }
    // 그 외
    let ball = 0;
    let strike = 0;
    answer.split("").map((v, i) => {
      if (value[i] === v) {
        strike += 1;
        return;
      }
      ball += answer.includes(value[i]) ? 1 : 0;
    });
    setTries([
      ...tries,
      { try: value, result: `ball : ${ball} \n strike : ${strike}` },
    ]);
    setValue("");
    onRefInput.current.focus();
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
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
      <span>{result}</span>
      <ul>
        {tries.length !== 0 &&
          tries.map((v, i) => {
            return <Try try={v.try} key={i} result={v.result} />;
          })}
      </ul>
    </>
  );
};

export default NumberBaseball;
