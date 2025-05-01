export const DIGIT_LENGTH = 3;

// 정답 숫자 생성
export const generateAnswer = () => {
  const nums = [];
  while (nums.length < DIGIT_LENGTH) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.join("");
};

// 게임 계산
export const getStrikeAndBall = (input, answer) => {
  let strike = 0,
    ball = 0;
  for (let i = 0; i < DIGIT_LENGTH; i++) {
    if (input[i] === answer[i]) strike++;
    else if (answer.includes(input[i])) ball++;
  }
  return { strike, ball };
}