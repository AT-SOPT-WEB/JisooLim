import { useTheme } from "@emotion/react";
import { HeaderContainer, ButtonGroup, Btn } from "./Header.style";

const Header = ({ onMenuClick }) => {
  const theme = useTheme();

  return (
    <div css={HeaderContainer(theme)}>
      <div>👽 깃허브 검색 & 숫자 야구 👽</div>
      <div css={ButtonGroup}>
        <button css={Btn(theme)} onClick={() => onMenuClick("github")}>
          깃허브 검색
        </button>
        <button css={Btn(theme)} onClick={() => onMenuClick("baseball")}>
          숫자야구
        </button>
      </div>
    </div>
  );
};

export default Header;
