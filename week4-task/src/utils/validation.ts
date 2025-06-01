// 유효성 검사
export function isIdValid(id: string): boolean {
  return id.trim() !== "" && id.length <= 20;
}

export function isPasswordValid(password: string, passwordCheck: string): boolean {
  const isFilled = password.trim() !== "" && passwordCheck.trim() !== "";
  const isLengthValid = password.length <= 20;
  const isMatch = password === passwordCheck;
  return isFilled && isLengthValid && isMatch;
}

export function isNicknameValid(nickname: string): boolean {
  return nickname.trim() !== "";
}

// 에러 메시지
export function getIdError(id: string): string {
  if (id.length > 20) {
    return "최대 길이는 20자 이하로 입력해주세요.";
  }
  return "";
}

export function getPasswordError(password: string, passwordCheck: string): string {
  if (password.length > 20) {
    return "최대 길이는 20자 이하로 입력해주세요.";
  }
  if (passwordCheck && password !== passwordCheck) {
    return "비밀번호가 일치하지 않아요.";
  }
  return "";
}
