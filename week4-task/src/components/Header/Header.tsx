import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  header,
  headerLeft,
  link,
  logoutButton,
  headerRight,
  userIcon,
} from "./Header.css";
import { Link } from "react-router-dom";
import userSvg from "../../assets/svg/user.svg";
import { getMyNickname } from "../../api/user";

const Header = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchNickname = async () => {
      const res = await getMyNickname();
      if (res.success && res.data) {
        setNickname(res.data.nickname);
      } else {
        setNickname("");
      }
    };
    fetchNickname();
  }, []);

  const handleLogoutHandler = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className={header}>
      <nav className={headerLeft}>
        <Link to="/mypage/info" className={link}>
          내 정보
        </Link>
        <Link to="/mypage/search" className={link}>
          SOPT 회원 조회하기
        </Link>
        <button className={logoutButton} onClick={handleLogoutHandler}>
          로그아웃
        </button>
      </nav>
      <section className={headerRight}>
        <img src={userSvg} alt="유저 아이콘" className={userIcon} />
        <div>{nickname || "닉네임"}</div>
      </section>
    </header>
  );
};
export default Header;
