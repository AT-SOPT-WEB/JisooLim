import { useTheme } from "@emotion/react";
import { useState } from "react";
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
} from "./GithubSearch.style";


const GithubSearch = () => {
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      fetchUserInfo(searchInput.trim());
    }
  };

  const fetchUserInfo = async (username) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

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
