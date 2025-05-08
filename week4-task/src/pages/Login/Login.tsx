import { Link } from "react-router-dom";
import { useState } from "react";
import {
  container,
  title,
  input,
  button,
  buttonActive,
  linkText,
} from "./Login.css";
import LoginInput from "./LoginInput";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "login-id") setId(value);
    if (id === "login-password") setPassword(value);
  };

  const isFormValid = id.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 추가
  };

  return (
    <main className={container}>
      <h1 className={title}>로그인</h1>
      <form aria-label="로그인 폼" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-id" className="sr-only">
            아이디
          </label>
          <LoginInput
            id="login-id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="login-password" className="sr-only">
            비밀번호
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            className={input}
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className={`${button} ${isFormValid ? buttonActive : ""}`}
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
        >
          로그인
        </button>
      </form>
      <nav>
        <Link to="/signup" className={linkText}>
          회원가입
        </Link>
      </nav>
    </main>
  );
};

export default Login;
