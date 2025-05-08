import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { container, title, bottomSection, linkText } from "./Signup.css";
import SignupIdStep from "./SignupIdStep";
import SignupPasswordStep from "./SignupPasswordStep";
import SignupNicknameStep from "./SignupNicknameStep";
import {signup} from "../../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // 유효성 검사
  const isIdValid = form.id.trim() !== "" && form.id.length <= 20;
  const isPasswordLengthValid = form.password.length <= 20;
  const isPasswordMatch = form.password === form.passwordCheck;
  const isPasswordFilled =
    form.password.trim() !== "" && form.passwordCheck.trim() !== "";
  const isPasswordValid =
    isPasswordFilled && isPasswordLengthValid && isPasswordMatch;
  const isNicknameValid = form.nickname.trim() !== "";

  // 아이디 에러 메시지
  let idError = "";
  if (form.id.length > 20) {
    idError = "최대 길이는 20자 이하로 입력해주세요.";
  }

  // 비밀번호 에러 메시지
  let passwordError = "";
  if (form.password.length > 20) {
    passwordError = "최대 길이는 20자 이하로 입력해주세요.";
  } else if (form.passwordCheck && form.password !== form.passwordCheck) {
    passwordError = "비밀번호가 일치하지 않아요.";
  }

  const handleNextClick = () => {
    if (step === 1 && isIdValid) {
      setStep(2);
    } else if (step === 2 && isPasswordValid) {
      setStep(3);
    }
  };

  const handleSignup = async () => {
    if (isNicknameValid) {
      const res = await signup({
        loginId: form.id,
        password: form.password,
        nickname: form.nickname,
      });
      if (res.success) {
        alert(`${res.data?.nickname} 님 회원가입 성공하셨습니다!`);
        navigate("/login");
      } else {
        alert(res.message);
      }
    }
  };

  return (
    <main className={container}>
      <h1 className={title}>회원가입</h1>

      {/* 아이디 */}
      {step === 1 && (
        <SignupIdStep
          id={form.id}
          onIdChange={handleInputChange}
          isIdValid={isIdValid}
          idError={idError}
          onNext={handleNextClick}
        />
      )}

      {/* 비밀번호 */}
      {step === 2 && (
        <SignupPasswordStep
          password={form.password}
          passwordCheck={form.passwordCheck}
          showPassword={showPassword}
          onPasswordChange={handleInputChange}
          onPasswordCheckChange={handleInputChange}
          onToggleShowPassword={handleToggleShowPassword}
          passwordError={passwordError}
          isPasswordValid={isPasswordValid}
          onNext={handleNextClick}
        />
      )}

      {/* 닉네임 */}
      {step === 3 && (
        <SignupNicknameStep
          nickname={form.nickname}
          onNicknameChange={handleInputChange}
          isNicknameValid={isNicknameValid}
          onSignup={handleSignup}
        />
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
