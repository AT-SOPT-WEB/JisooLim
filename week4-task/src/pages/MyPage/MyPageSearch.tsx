import React, { useState } from "react";
import {
  container,
  title,
  label,
  input,
  button,
  buttonActive,
} from "../../shared/styles/formCommon.css";
import { resultListWrapper, resultItem, spinner } from "./MyPageSearch.css";
import { searchNickname } from "../../api/search";

const MyPageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    const res = await searchNickname(searchTerm);
    setLoading(false);
    if (res.success && res.data) {
      setResults(res.data.nicknameList);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={container}>
      <h1 className={title}>SOPT 회원 조회하기</h1>
      <label htmlFor="member-search" className={label}>
        닉네임
      </label>
      <input
        id="member-search"
        type="text"
        placeholder="검색할 회원 정보를 입력해주세요"
        value={searchTerm}
        onChange={handleSearchChange}
        className={input}
      />
      <button className={`${button} ${buttonActive}`} onClick={handleSearch}>
        확인
      </button>
      {loading && <div className={spinner} aria-label="로딩 중" />}
      <ul className={resultListWrapper}>
        {results.map((nickname, idx) => (
          <li key={nickname + "-" + idx} className={resultItem}>
            {nickname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPageSearch;
