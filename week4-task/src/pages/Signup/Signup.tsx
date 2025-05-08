import { Link } from "react-router-dom";
import { useState } from "react";
import {
  container,
  title,
  bottomSection,
  linkText,
} from "./Signup.css";
import SignupIdStep from "./SignupIdStep";
import SignupPasswordStep from "./SignupPasswordStep";
import SignupNicknameStep from "./SignupNicknameStep";

const Signup = () => {
  const [step, setStep] = useState(1);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  // 유효성 검사
  const isIdValid = id.trim() !== "" && id.length <= 20;
  const isPasswordLengthValid = password.length <= 20;
  const isPasswordMatch = password === passwordCheck;
  const isPasswordFilled =
    password.trim() !== "" && passwordCheck.trim() !== "";
  const isPasswordValid =
    isPasswordFilled && isPasswordLengthValid && isPasswordMatch;
  const isNicknameValid = nickname.trim() !== "";

  // 아이디 에러 메시지
  let idError = "";
  if (id.length > 20) {
    idError = "최대 길이는 20자 이하로 입력해주세요.";
  }

  // 비밀번호 에러 메시지
  let passwordError = "";
  if (password.length > 20) {
    passwordError = "최대 길이는 20자 이하로 입력해주세요.";
  } else if (passwordCheck && password !== passwordCheck) {
    passwordError = "비밀번호가 일치하지 않아요.";
  }

  const handleNextClick = () => {
    if (step === 1 && isIdValid) {
      setStep(2);
    } else if (step === 2 && isPasswordValid) {
      setStep(3);
    }
  };

  const handleSignup = () => {
    if (isNicknameValid) {
      // 회원가입 처리 로직 넣기
      alert("회원가입 완료!");
    }
  };

  return (
    <main className={container}>
      <h1 className={title}>회원가입</h1>

      {/* 아이디 */}
      {step === 1 && (
      <SignupIdStep
        id={id}
        onIdChange={handleIdChange}
        isIdValid={isIdValid}
        idError={idError}
        onNext={handleNextClick}
      />
    )}

      {/* 비밀번호 */}
      {step === 2 && (
        <SignupPasswordStep
          password={password}
          passwordCheck={passwordCheck}
          showPassword={showPassword}
          onPasswordChange={e => setPassword(e.target.value)}
          onPasswordCheckChange={e => setPasswordCheck(e.target.value)}
          onToggleShowPassword={() => setShowPassword(prev => !prev)}
          passwordError={passwordError}
          isPasswordValid={isPasswordValid}
          onNext={handleNextClick}
        />
      )}

      {/* 닉네임 */}
      {step === 3 && (
        <SignupNicknameStep
          nickname={nickname}
          onNicknameChange={e => setNickname(e.target.value)}
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
