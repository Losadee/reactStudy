import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  // const [winNumbers, setWinNumbers] = useState(getWinNumbers); // getWinNumbers 한번만 실행 getWinNumbers() 리렌더링 때마다 실행
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  // 처음에만 실행됨
  useEffect(() => {
    // ajax
  }, []);

  // 처음에만 실행 안되게 하는 방법
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // ajax
    }
  });

  useEffect(
    // 익명 함수보다 어떤 역할을 하는지 알기 쉽게 함수명을 써주는 것이 좋다.
    function runTimeouts() {
      console.log("useEffect");
      for (let i = 0; i < winNumbers.length - 1; i++) {
        timeouts.current[i] = setTimeout(() => {
          setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
        }, (i + 1) * 1000);
      }
      timeouts.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true);
      }, 7000);
      return () => {
        // componentWillUnmount
        timeouts.current.forEach((v) => {
          clearTimeout(v);
        });
      };
    },
    [timeouts.current]
  ); // componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘다 수행

  useEffect(() => {
    console.log("로또 숫자를 생성합니다.");
  }, [winNumbers]);

  const onClickRedo = useCallback(() => {
    console.log("onClickRedo");
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);
  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
