import React from "react";
import eye from "../../assets/svg/eye.svg";
import eyeCrossed from "../../assets/svg/eye-crossed.svg";
import {
  label,
  passwordInputWrapper,
  passwordInput,
  passwordToggleBtn,
  input,
  errorMessage,
  button,
  buttonActive,
} from "./Signup.css";

interface Props {
  password: string;
  passwordCheck: string;
  showPassword: boolean;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPassword: () => void;
  passwordError: string;
  isPasswordValid: boolean;
  onNext: () => void;
}

const SignupPasswordStep = ({
  password,
  passwordCheck,
  showPassword,
  onPasswordChange,
  onPasswordCheckChange,
  onToggleShowPassword,
  passwordError,
  isPasswordValid,
  onNext,
}: Props) => (
  <>
    <label htmlFor="signup-password" className={label}>
      비밀번호
    </label>
    <div className={passwordInputWrapper}>
      <input
        id="signup-password"
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호를 입력해주세요"
        value={password}
        autoComplete="new-password"
        onChange={onPasswordChange}
        className={passwordInput}
      />
      <button
        type="button"
        className={passwordToggleBtn}
        onClick={onToggleShowPassword}
        tabIndex={-1}
        aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
      >
        <img
          src={showPassword ? eyeCrossed : eye}
          alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
          width={20}
          height={20}
        />
      </button>
    </div>
    <label htmlFor="signup-password-check" className="sr-only">
      비밀번호 확인
    </label>
    <input
      id="signup-password-check"
      name="passwordCheck"
      type="password"
      placeholder="비밀번호 확인"
      value={passwordCheck}
      autoComplete="new-password"
      onChange={onPasswordCheckChange}
      className={input}
    />
    {passwordError && <div className={errorMessage}>{passwordError}</div>}{" "}
    <button
      type="button"
      className={`${button} ${isPasswordValid ? buttonActive : ""}`}
      onClick={onNext}
      disabled={!isPasswordValid}
    >
      다음
    </button>
  </>
);

export default SignupPasswordStep;
