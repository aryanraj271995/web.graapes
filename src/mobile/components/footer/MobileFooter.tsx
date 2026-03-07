import { NavLink } from "react-router-dom";
import { FiHome, FiGrid, FiUser } from "react-icons/fi";
import { CgMore } from "react-icons/cg";
import "./MobileFooter.css";

type Props = {
  openCategories: () => void;
};

export default function MobileFooter({ openCategories }: Props) {
  return (
    <footer className="mobile-footer">

      <NavLink to="/" className="footer-item">
        <FiHome />
        <span>Home</span>
      </NavLink>

      <div className="footer-item" onClick={openCategories}>
        <FiGrid />
        <span>Categories</span>
      </div>

      <div className="footer-item">
        <CgMore />
        <span>More</span>
      </div>

      <NavLink to="/account" className="footer-item">
        <FiUser />
        <span>Account</span>
      </NavLink>

    </footer>
  );
}