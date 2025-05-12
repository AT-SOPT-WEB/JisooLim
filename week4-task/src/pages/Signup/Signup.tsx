import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { signup } from "../../api/auth";
import SignupIdStep from "./components/SignupIdStep";
import SignupPasswordStep from "./components/SignupPasswordStep";
import SignupNicknameStep from "./components/SignupNicknameStep";
import {
  container,
  title,
  linkText,
  bottomSection,
} from "../../shared/styles/formCommon.css";
import {
  isIdValid,
  isPasswordValid,
  isNicknameValid,
  getIdError,
  getPasswordError,
} from "../../utils/validation";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, handleInputChange] = useForm({
    id: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // 유효성 검사, 에러 메시지
  const idError = getIdError(form.id);
  const passwordError = getPasswordError(form.password, form.passwordCheck);

  const handleNextClick = () => {
    if (step === 1 && isIdValid(form.id)) {
      setStep(2);
    } else if (
      step === 2 &&
      isPasswordValid(form.password, form.passwordCheck)
    ) {
      setStep(3);
    }
  };

  const handleSignup = async () => {
    if (isNicknameValid(form.nickname)) {
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
          isIdValid={isIdValid(form.id)}
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
          isPasswordValid={isPasswordValid(form.password, form.passwordCheck)}
          onNext={handleNextClick}
        />
      )}

      {/* 닉네임 */}
      {step === 3 && (
        <SignupNicknameStep
          nickname={form.nickname}
          onNicknameChange={handleInputChange}
          isNicknameValid={isNicknameValid(form.nickname)}
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
