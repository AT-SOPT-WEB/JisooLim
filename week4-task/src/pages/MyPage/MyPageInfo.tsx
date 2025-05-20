import { useNickname } from "@hooks/useNickname";
import { useState } from "react";
import {
  container,
  title,
  label,
  input,
  button,
  buttonActive,
} from "@shared/styles/formCommon.css";
import { updateNickname } from "@api/user";

const MyPageInfo = () => {
  const [nickname, setGlobalNickname] = useNickname();
  const [inputValue, setInputValue] = useState(nickname);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await updateNickname(inputValue);
    if (result?.success) {
      setGlobalNickname(inputValue);
      setInputValue("");
      alert("닉네임이 변경되었습니다.");
    } else if (result?.message) {
      alert(result.message);
    }
  };

  return (
    <div className={container}>
      <h1 className={title}>내 정보 수정하기</h1>
      <label htmlFor="new-nickname" className={label}>
        새 닉네임
      </label>
      <input
        id="new-nickname"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="새 닉네임을 입력하세요"
        className={input}
      />
      <button className={`${button} ${buttonActive}`} onClick={handleSubmit}>
        저장
      </button>
    </div>
  );
};

export default MyPageInfo;
