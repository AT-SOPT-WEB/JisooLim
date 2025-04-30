import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import {
  container,
  searchBox,
  cardStyle,
  closeButton,
  profileImg,
  profileLink,
  username,
  nickname,
  followStyle,
  followBox,
  recentSearchList,
  recentSearchItem,
  deleteButton,
  recentSearchContainer,
  recentSearchTitle,
} from "./GithubSearch.style";

const RECENT_KEY = "recentSearches";

const GithubSearch = () => {
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });
  const [recentSearches, setRecentSearches] = useState([]);

  // 최근 검색어 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    setRecentSearches(stored);
  }, []);

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  // 엔터치면 검색
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      fetchUserInfo(searchInput.trim());
    }
  };

  // Github 유저 정보 가져오기
  const fetchUserInfo = async (username) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });

      // 최근 검색어 저장
      let updated = recentSearches.filter((item) => item !== username);
      updated.push(username);
      if (updated.length > 3) updated = updated.slice(updated.length - 3);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  // 최근 검색어 클릭
  const handleRecentClick = (username) => {
    setSearchInput(username);
    fetchUserInfo(username);
  };

  // 최근 검색어 삭제
  const handleDeleteSearch = (username) => {
    const updated = recentSearches.filter((item) => item !== username);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  // 검색 결과 카드 닫기
  const handleCloseCard = () => {
    setUserInfo({ status: "idle", data: null });
    setSearchInput("");
  };

  const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
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
      {recentSearches.length > 0 && (
        <div css={recentSearchContainer}>
          <div css={recentSearchTitle}>최근 검색어</div>
          <div css={recentSearchList}>
            {recentSearches.map((search) => (
              <div
                key={search}
                css={recentSearchItem(theme)}
                tabIndex={0}
                onClick={() => handleRecentClick(search)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handleRecentClick(search);
                }}
              >
                <span>{search}</span>
                <button
                  type="button"
                  css={deleteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSearch(search);
                  }}
                  aria-label={`${search} 검색어 삭제`}
                  tabIndex={-1}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 결과 카드 */}
      {status === "resolved" && (
        <section css={cardStyle(theme)}>
          <button type="button" css={closeButton} onClick={handleCloseCard}>
            ❌
          </button>
          <a href={data.html_url} {...linkProps}>
            <img src={data.avatar_url} alt="프로필" css={profileImg(theme)} />
          </a>
          <h1 css={username}>
            <a href={data.html_url} css={profileLink(theme)} {...linkProps}>
              {data.name}
            </a>
          </h1>
          <h2 css={nickname}>{data.login}</h2>
          <p>{data.bio}</p>
          <dl css={followStyle}>
            <div css={followBox(theme)}>
              <dt>Followers</dt>
              <dd>{data.followers}</dd>
            </div>
            <div css={followBox(theme)}>
              <dt>Following</dt>
              <dd>{data.following}</dd>
            </div>
          </dl>
        </section>
      )}
    </div>
  );
};

export default GithubSearch;
