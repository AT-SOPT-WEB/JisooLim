import { useNavigate, Link } from "react-router-dom";
import { useForm } from "@hooks/useForm";
import { signin } from "@api/auth";
import LoginInput from "./LoginInput";
import {
  container,
  title,
  input,
  button,
  buttonActive,
  linkText,
} from "@shared/styles/formCommon.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, handleInputChange] = useForm({
    id: "",
    password: "",
  });

  const isFormValid = form.id.trim() !== "" && form.password.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const result = await signin({ loginId: form.id, password: form.password });
    if (result.success && result.data?.userId) {
      localStorage.setItem("userId", result.data.userId.toString());
      alert("로그인 성공!");
      navigate("/mypage/info");
    } else {
      alert(result.message);
    }
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
            name="id"
            type="text"
            placeholder="아이디"
            value={form.id}
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
            name="password"
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            className={input}
            value={form.password}
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
