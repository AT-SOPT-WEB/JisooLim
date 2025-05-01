import { useTheme } from "@emotion/react";
import { useState } from "react";
import {
  container,
  searchBox,
  spinner,
  errorMessage,
} from "../styles/GithubSearch.style";
import useRecentSearches from "../hooks/useRecentSearchs";
import RecentSearches from "../components/GithubSearch/RecentSearches";
import GithubUserCard from "../components/GithubSearch/GithubUserCard";

const GithubSearch = () => {
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });
  const { recentSearches, addSearch, deleteSearch } = useRecentSearches();

  const handleChangeInput = (e) => setSearchInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      fetchUserInfo(searchInput.trim());
    }
  };

  // 깃허브 유저 정보 가져오기
  const fetchUserInfo = async (username) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
      addSearch(username);
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  // 최근 검색어 클릭
  const handleRecentClick = (username) => {
    setSearchInput(username);
    fetchUserInfo(username);
  };

  // 유저 카드 닫기
  const handleCloseCard = () => {
    setUserInfo({ status: "idle", data: null });
    setSearchInput("");
  };

  const { status, data } = userInfo;

  return (
    <div css={container}>
      {/* 검색창 */}
      <input
        type="text"
        aria-label="Github 유저 검색"
        value={searchInput}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        placeholder="Github 프로필을 검색해보세요."
        css={searchBox(theme)}
        autoFocus
      />

      {/* 최근 검색어 */}
      <RecentSearches
        searches={recentSearches}
        onClick={handleRecentClick}
        onDelete={deleteSearch}
        theme={theme}
      />

      {/* 로딩중 */}
      {status === "pending" && (
        <div css={spinner(theme)} aria-label="로딩 중" />
      )}

      {/* 결과 없을 때 */}
      {status === "rejected" && (
        <div css={errorMessage}>
          결과를 찾을 수 없습니다. 다시 시도해 주세요.
        </div>
      )}

      {/* 결과 카드 */}
      {status === "resolved" && (
        <GithubUserCard data={data} onClose={handleCloseCard} theme={theme} />
      )}
    </div>
  );
};

export default GithubSearch;
