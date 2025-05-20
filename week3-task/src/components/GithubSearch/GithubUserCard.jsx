import {
  cardStyle,
  closeButton,
  profileImg,
  profileLink,
  username,
  nickname,
  followStyle,
  followBox,
} from "../../styles/GithubSearch.style";
import { externalLinkProps } from "../../utils/linkUtils";

const GithubUserCard = ({ data, onClose, theme }) => {
  return (
    <section css={cardStyle(theme)}>
      <button type="button" css={closeButton} onClick={onClose}>
        ❌
      </button>
      <a href={data.html_url} {...externalLinkProps}>
        <img src={data.avatar_url} alt="프로필" css={profileImg(theme)} />
      </a>
      <h1 css={username}>
        <a href={data.html_url} css={profileLink(theme)} {...externalLinkProps}>
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
  );
};

export default GithubUserCard;
