import { useNickname } from "@hooks/useNickname";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  header,
  headerLeft,
  menuButton,
  menuIcon,
  link,
  dropdownMenu,
  dropdownMenuItem,
  logoutButton,
  headerRight,
  userIcon,
} from "./Header.css";
import menuSvg from "@assets/svg/menu.svg";
import closeSvg from "@assets/svg/close.svg";
import userSvg from "@assets/svg/user.svg";
import { getMyNickname } from "@api/user";

const menuItems = [
  {
    to: "/mypage/info",
    label: "내 정보",
    key: "info",
  },
  {
    to: "/mypage/search",
    label: "SOPT 회원 조회하기",
    key: "search",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useNickname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getMyNickname();
      if (res.success && res.data) setNickname(res.data.nickname);
    })();
  }, [setNickname]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <header className={header}>
      <nav className={headerLeft}>
        {menuItems.map((item) => (
          <Link to={item.to} className={link} key={item.key}>
            {item.label}
          </Link>
        ))}
        <button className={logoutButton} onClick={handleLogout}>
          로그아웃
        </button>
      </nav>

      <button
        className={menuButton}
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        <img
          src={menuOpen ? closeSvg : menuSvg}
          alt={menuOpen ? "메뉴 닫기" : "메뉴"}
          className={menuIcon}
        />
      </button>

      <section className={headerRight}>
        <img src={userSvg} alt="유저 아이콘" className={userIcon} />
        <div>{nickname || "닉네임"}</div>
      </section>

      {menuOpen && (
        <nav className={dropdownMenu}>
          {menuItems.map((item, idx) => (
            <div
              key={item.key}
              className={dropdownMenuItem}
              style={{ animationDelay: `${idx * 0.09 + 0.09}s` }}
            >
              <Link to={item.to} className={link} onClick={handleMenuClose}>
                {item.label}
              </Link>
            </div>
          ))}
          <div
            className={dropdownMenuItem}
            style={{ animationDelay: `${menuItems.length * 0.09 + 0.09}s` }}
          >
            <button className={logoutButton} onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;
