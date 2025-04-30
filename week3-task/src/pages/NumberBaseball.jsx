import { useTheme } from "@emotion/react";
import {
  container,
  searchBox,
  errorText,
  historyList,
  historyCard,
} from "../styles/NumberBaseball.style";
import { useState, useEffect, useRef } from "react";

// 정답 숫자 생성
const generateAnswer = () => {
  const nums = [];
  while (nums.length < 3) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.join("");
};

// 게임 계산
function getStrikeAndBall(input, answer) {
  let strike = 0,
    ball = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] === answer[i]) strike++;
    else if (answer.includes(input[i])) ball++;
  }
  return { strike, ball };
}

const ANSWER_MESSAGE = "🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.";
const GAME_OVER_MESSAGE =
  "😫 10번을 넘겨서 실패하였습니다. 게임이 초기화됩니다.";

const NumberBaseball = () => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [isGame, setIsGame] = useState(false);
  const [history, setHistory] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const answer = generateAnswer();
    setAnswer(answer);
    console.log("정답:", answer);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    const nums = onlyNums.slice(0, 3);
    setValue(nums);

    if (nums.length === 3) {
      const digits = nums.split("");
      const isDiff = new Set(digits).size === 3;

      if (!isDiff) {
        setError(true);
        setResult("");
      } else {
        setError(false);
        const { strike, ball } = getStrikeAndBall(nums, answer);
        const resultText =
          strike === 3 ? ANSWER_MESSAGE : `${strike} 스트라이크 ${ball} 볼`;
        setResult(resultText);

        // 기록 추가
        setHistory((prev) => {
          const newHistory = [
            ...prev,
            { value: nums, result: `${strike}S ${ball}B` },
          ];

          if (strike !== 3 && newHistory.length >= 10) {
            setResult(GAME_OVER_MESSAGE);
            setIsGame(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(resetGame, 5000);
          }
          return newHistory;
        });

        // 정답이면 3초 후 초기화
        if (strike === 3) {
          setIsGame(true);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(resetGame, 3000);
        }
      }
    } else {
      setError(false);
      setResult("");
    }
  };

  const resetGame = () => {
    setValue("");
    setError(false);
    setResult("");
    setHistory([]);
    setAnswer(generateAnswer());
    setIsGame(false);
  };

  return (
    <div css={container}>
      <input
        type="text"
        inputMode="numeric"
        aria-label="숫자 야구 게임"
        placeholder="3자리 숫자를 입력해주세요."
        value={value}
        onChange={handleChange}
        css={searchBox(theme)}
        maxLength={3}
        disabled={isGame}
      />

      {error ? (
        <div css={errorText(theme)}>
          ⚠️ 서로 다른 숫자 3자리를 입력해주세요!
        </div>
      ) : (
        result && <div css={errorText(theme)}>{result}</div>
      )}

      {history.length > 0 && (
        <div css={historyList} aria-label="입력 기록">
          {history.map((item, idx) => (
            <div css={historyCard(theme)} key={idx}>
              <span>{item.value}</span>
              <span className="dash">-</span>
              <span>{item.result}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NumberBaseball;
