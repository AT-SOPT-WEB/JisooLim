import React from "react";
import { label, input, button, buttonActive } from "./Signup.css";

interface Props {
  nickname: string;
  onNicknameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNicknameValid: boolean;
  onSignup: () => void;
}

const SignupNicknameStep = ({
  nickname,
  onNicknameChange,
  isNicknameValid,
  onSignup,
}: Props) => (
  <>
    <label htmlFor="signup-nickname" className={label}>
      닉네임
    </label>
    <input
      id="signup-nickname"
      type="text"
      placeholder="닉네임을 입력해주세요"
      value={nickname}
      onChange={onNicknameChange}
      className={input}
    />
    <button
      type="button"
      className={`${button} ${isNicknameValid ? buttonActive : ""}`}
      onClick={onSignup}
      disabled={!isNicknameValid}
    >
      회원가입 하기
    </button>
  </>
);

export default SignupNicknameStep;
