import React from "react";
import { label, input, errorMessage, button, buttonActive } from "./Signup.css";

interface Props {
  id: string;
  onIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIdValid: boolean;
  idError: string;
  onNext: () => void;
}

const SignupIdStep = ({
  id,
  onIdChange,
  isIdValid,
  idError,
  onNext,
}: Props) => (
  <>
    <label htmlFor="signup-id" className={label}>
      아이디
    </label>
    <input
      id="signup-id"
      name="id"
      type="text"
      placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
      value={id}
      autoComplete="username"
      onChange={onIdChange}
      className={input}
    />
    {idError && <div className={errorMessage}>{idError}</div>}{" "}
    <button
      type="button"
      className={`${button} ${isIdValid ? buttonActive : ""}`}
      onClick={onNext}
    >
      다음
    </button>
  </>
);

export default SignupIdStep;
