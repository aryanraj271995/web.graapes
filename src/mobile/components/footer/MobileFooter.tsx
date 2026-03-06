import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiList,
  FiHeart,
} from "react-icons/fi";
import "./MobileFooter.css";

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <NavLink to="/" className="footer-item">
        <FiHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/" className="footer-item">
        <FiSearch />
        <span>Search</span>
      </NavLink>

      <NavLink to="/" className="footer-item">
        <FiList />
        <span>More</span>
      </NavLink>

      <NavLink to="/" className="footer-item">
        <FiHeart />
        <span>Favourites</span>
      </NavLink>

      {/* active indicator */}
      <div className="footer-indicator" />
    </footer>
  );
};

export default MobileFooter;
