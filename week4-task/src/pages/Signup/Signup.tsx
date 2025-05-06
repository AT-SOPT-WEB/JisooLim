import { Link } from "react-router-dom";
import { useState } from "react";
import {
  container,
  title,
  label,
  input,
  button,
  buttonActive,
  bottomSection,
  linkText,
} from "./Signup.css";

const Signup = () => {
  const [step, setStep] = useState(1);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
  };

  const isIdValid = id.trim() !== "";

  const handleNextClick = () => {
    if (isIdValid) setStep(2);
  };

  return (
    <main className={container}>
      <h1 className={title}>회원가입</h1>

      {step === 1 && (
        <>
          <label htmlFor="signup-id" className={label}>
            아이디
          </label>
          <input
            id="signup-id"
            type="text"
            placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
            value={id}
            autoComplete="username"
            onChange={handleIdChange}
            className={input}
          />
          <button
            type="button"
            className={`${button} ${isIdValid ? buttonActive : ""}`}
            onClick={handleNextClick}
          >
            다음
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <label htmlFor="signup-password" className={label}>
            비밀번호
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            autoComplete="new-password"
            onChange={handlePasswordChange}
            className={input}
          />
          <label htmlFor="signup-password-check" className="sr-only">
            비밀번호 확인
          </label>
          <input
            id="signup-password-check"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            autoComplete="new-password"
            onChange={handlePasswordCheckChange}
            className={input}
          />
          <button
            type="button"
            className={`${button} ${isIdValid ? buttonActive : ""}`}
            onClick={handleNextClick}
          >
            다음
          </button>
        </>
      )}
      <section className={bottomSection}>
        <div>이미 회원이신가요?</div>
        <nav>
          <Link to="/login" className={linkText}>
            로그인
          </Link>
        </nav>
      </section>
    </main>
  );
};

export default Signup;
