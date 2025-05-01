import { useTheme } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { container } from "../styles/NumberBaseball.style";
import { DIGIT_LENGTH, generateAnswer, getStrikeAndBall } from "../utils/numberBaseball";
import BaseballInput from "../components/NumberBaseball/BaseballInput";
import HistoryList from "../components/NumberBaseball/HistoryList";

const MAX_ATTEMPTS = 10;
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

  // 게임 시작 시 정답 생성
  useEffect(() => {
    const answer = generateAnswer();
    setAnswer(answer);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    const nums = onlyNums.slice(0, DIGIT_LENGTH);
    
    setValue(nums);

    if (nums.length === DIGIT_LENGTH) {
      const digits = nums.split("");
      const isDiff = new Set(digits).size === DIGIT_LENGTH;

      if (!isDiff) {
        setError(true);
        setResult("");
      } else {
        setError(false);
        const { strike, ball } = getStrikeAndBall(nums, answer);
        const resultText =
          strike === DIGIT_LENGTH
            ? ANSWER_MESSAGE
            : `${strike} 스트라이크 ${ball} 볼`;
        setResult(resultText);

        // 기록 추가
        setHistory((prev) => {
          const newHistory = [
            ...prev,
            { value: nums, result: `${strike}S ${ball}B` },
          ];

          if (strike !== DIGIT_LENGTH && newHistory.length >= MAX_ATTEMPTS) {
            setResult(GAME_OVER_MESSAGE);
            setIsGame(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(resetGame, 5000);
          }
          return newHistory;
        });

        // 정답이면 3초 후 초기화
        if (strike === DIGIT_LENGTH) {
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

  // 게임 리셋
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
      <BaseballInput
        value={value}
        onChange={handleChange}
        error={error}
        result={result}
        disabled={isGame}
        theme={theme}
      />
      <HistoryList history={history} theme={theme} />
    </div>
  );
};

export default NumberBaseball;
