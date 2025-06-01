import { Link } from "react-router-dom";
import {
  dropdownMenu,
  dropdownMenuItem,
  link as linkStyle,
  logoutButton,
} from "./Header.css";

type MenuItem = {
  to: string;
  label: string;
  key: string;
};

interface DropdownMenuProps {
  menuItems: MenuItem[];
  onClose: () => void;
  onLogout: () => void;
}

const DropdownMenu = ({ menuItems, onClose, onLogout }: DropdownMenuProps) => {
  return (
    <nav className={dropdownMenu}>
      {menuItems.map((item, idx) => (
        <div
          key={item.key}
          className={dropdownMenuItem}
          style={{ animationDelay: `${idx * 0.09 + 0.09}s` }}
        >
          <Link to={item.to} className={linkStyle} onClick={onClose}>
            {item.label}
          </Link>
        </div>
      ))}
      <div
        className={dropdownMenuItem}
        style={{ animationDelay: `${menuItems.length * 0.09 + 0.09}s` }}
      >
        <button className={logoutButton} onClick={onLogout}>
          로그아웃
        </button>
      </div>
    </nav>
  );
};

export default DropdownMenu;
