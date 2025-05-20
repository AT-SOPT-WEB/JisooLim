import { useTheme } from "@emotion/react";
import { useReducer, useEffect, useRef } from "react";
import { container } from "../styles/NumberBaseball.style";
import {
  DIGIT_LENGTH,
  generateAnswer,
  getStrikeAndBall,
} from "../utils/numberBaseball";
import BaseballInput from "../components/NumberBaseball/BaseballInput";
import HistoryList from "../components/NumberBaseball/HistoryList";
import {
  MAX_ATTEMPTS,
  ANSWER_MESSAGE,
  GAME_OVER_MESSAGE,
} from "../constants/messages";

// 액션 타입 상수
const SET_VALUE = "SET_VALUE";
const SET_ERROR = "SET_ERROR";
const SET_ANSWER = "SET_ANSWER";
const SET_RESULT = "SET_RESULT";
const SET_IS_GAME = "SET_IS_GAME";
const ADD_HISTORY = "ADD_HISTORY";
const RESET = "RESET";

const SET_GAME_SUCCESS = "SET_GAME_SUCCESS";
const SET_GAME_OVER = "SET_GAME_OVER";

// 초기 상태
const initialState = {
  value: "",
  error: false,
  answer: "",
  result: "",
  isGame: false,
  history: [],
};

// 리듀서 함수
function gameReducer(state, action) {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_ANSWER:
      return { ...state, answer: action.payload };
    case SET_RESULT:
      return { ...state, result: action.payload };
    case SET_IS_GAME:
      return { ...state, isGame: action.payload };
    case ADD_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    case RESET:
      return { ...initialState, answer: action.payload };
    case SET_GAME_SUCCESS:
      return {
        ...state,
        result: ANSWER_MESSAGE,
        isGame: true,
        history: [...state.history, action.payload.historyItem],
      };

    case SET_GAME_OVER:
      return {
        ...state,
        result: GAME_OVER_MESSAGE,
        isGame: true,
        history: [...state.history, action.payload.historyItem],
      };

    default:
      return state;
  }
}

const NumberBaseball = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const timeoutRef = useRef(null);

  // 게임 시작 시 정답 생성
  useEffect(() => {
    const newAnswer = generateAnswer();
    dispatch({ type: SET_ANSWER, payload: newAnswer });
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // 입력값 처리 함수
  const processInput = (inputValue) => {
    const onlyNums = inputValue.replace(/[^0-9]/g, "");
    return onlyNums.slice(0, DIGIT_LENGTH);
  };

  // 게임 판정
  const handleGameJudge = (nums) => {
    dispatch({ type: SET_ERROR, payload: false });
    const { strike, ball } = getStrikeAndBall(nums, state.answer);
    const resultText =
      strike === DIGIT_LENGTH
        ? ANSWER_MESSAGE
        : `${strike} 스트라이크 ${ball} 볼`;

    dispatch({ type: SET_RESULT, payload: resultText });

    // 기록 추가
    const newHistoryItem = { value: nums, result: `${strike}S ${ball}B` };

    if (strike === DIGIT_LENGTH) {
      dispatch({
        type: SET_GAME_SUCCESS,
        payload: { historyItem: newHistoryItem },
      });
      timeoutRef.current = setTimeout(resetGame, 3000);
    } else if (state.history.length + 1 >= MAX_ATTEMPTS) {
      dispatch({
        type: SET_GAME_OVER,
        payload: { historyItem: newHistoryItem },
      });
      timeoutRef.current = setTimeout(resetGame, 5000);
    } else {
      dispatch({ type: ADD_HISTORY, payload: newHistoryItem });
      dispatch({
        type: SET_RESULT,
        payload: `${strike} 스트라이크 ${ball} 볼`,
      });
    }
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const nums = processInput(e.target.value);
    dispatch({ type: SET_VALUE, payload: nums });

    if (nums.length === DIGIT_LENGTH) {
      const digits = nums.split("");
      const isDiff = new Set(digits).size === DIGIT_LENGTH;

      if (!isDiff) {
        dispatch({ type: SET_ERROR, payload: true });
        dispatch({ type: SET_RESULT, payload: "" });
      } else {
        handleGameJudge(nums);
      }
    } else {
      dispatch({ type: SET_ERROR, payload: false });
      dispatch({ type: SET_RESULT, payload: "" });
    }
  };

  // 게임 리셋
  const resetGame = () => {
    clearTimeout(timeoutRef.current);
    const newAnswer = generateAnswer();
    dispatch({ type: RESET, payload: newAnswer });
  };

  const { value, error, result, isGame, history } = state;

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
