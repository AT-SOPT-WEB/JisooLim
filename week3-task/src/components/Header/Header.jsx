import {
  headerContainer,
  buttonGroup,
  btn,
  activeBtn,
} from "../../styles/Header.style";

const Header = ({ onMenuClick, selectedMenu }) => {
  return (
    <header css={headerContainer}>
      <div>👽 깃허브 검색 & 숫자 야구 👽</div>
      <nav css={buttonGroup}>
        <button
          css={selectedMenu === "github" ? activeBtn : btn}
          onClick={() => onMenuClick("github")}
          aria-current={selectedMenu === "github" ? "page" : undefined}
        >
          깃허브 검색
        </button>
        <button
          css={selectedMenu === "baseball" ? activeBtn : btn}
          onClick={() => onMenuClick("baseball")}
          aria-current={selectedMenu === "baseball" ? "page" : undefined}
        >
          숫자야구
        </button>
      </nav>
    </header>
  );
};

export default Header;
