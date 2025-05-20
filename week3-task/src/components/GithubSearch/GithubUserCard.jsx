import * as S from "../../styles/GithubSearch.style";
import { externalLinkProps } from "../../utils/linkUtils";

const GithubUserCard = ({ data, onClose, theme }) => {
  return (
    <section css={S.cardStyle(theme)}>
      <button type="button" css={S.closeButton} onClick={onClose}>
        ❌
      </button>
      <a href={data.html_url} {...externalLinkProps}>
        <img src={data.avatar_url} alt="프로필" css={S.profileImg(theme)} />
      </a>
      <h1 css={S.username}>
        <a
          href={data.html_url}
          css={S.profileLink(theme)}
          {...externalLinkProps}
        >
          {data.name}
        </a>
      </h1>
      <h2 css={S.nickname}>{data.login}</h2>
      <p>{data.bio}</p>
      <dl css={S.followStyle}>
        <div css={S.followBox(theme)}>
          <dt>Followers</dt>
          <dd>{data.followers}</dd>
        </div>
        <div css={S.followBox(theme)}>
          <dt>Following</dt>
          <dd>{data.following}</dd>
        </div>
      </dl>
    </section>
  );
};

export default GithubUserCard;
