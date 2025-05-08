import React, { useState } from "react";
import {
  container,
  title,
  label,
  input,
  button,
  buttonActive,
} from "../Signup/Signup.css";

const MyPageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const isSearchValid = searchTerm.trim() !== "";

  const handleSearch = () => {
    
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
      <button
        className={`${button} ${isSearchValid ? buttonActive : ""}`}
        onClick={handleSearch}
        disabled={!isSearchValid}
      >
        확인
      </button>
    </div>
  );
};

export default MyPageSearch;
