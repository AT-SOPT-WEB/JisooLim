import {
  container,
  title,
  label,
  input,
  button,
  buttonActive,
} from "../../shared/styles/formCommon.css";

const MyPageInfo = () => {
  return (
    <div className={container}>
      <h1 className={title}>내 정보 수정하기</h1>
      <label htmlFor="new-nickname" className={label}>
        새 닉네임
      </label>
      <input
        id="new-nickname"
        type="text"
        placeholder="새 닉네임을 입력하세요"
        className={input}
      />
      <button className={`${button} ${buttonActive}`}>저장</button>
    </div>
  );
};

export default MyPageInfo;
