import { header, headerLeft, link, headerRight, userIcon } from "./Header.css";
import { Link } from "react-router-dom";
import userSvg from "../../assets/svg/user.svg";

const Header = () => {
  return (
    <header className={header}>
      <nav className={headerLeft}>
        <Link to="/mypage/info" className={link}>
          내 정보
        </Link>
        <Link to="/mypage/search" className={link}>
          SOPT 회원 조회하기
        </Link>
        <Link to="/logout" className={link}>
          로그아웃
        </Link>
      </nav>
      <section className={headerRight}>
        <img src={userSvg} alt="유저 아이콘" className={userIcon} />
        <div>닉네임</div>
      </section>
    </header>
  );
};
export default Header;
