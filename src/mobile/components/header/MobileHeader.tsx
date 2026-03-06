import { useNavigate } from "react-router-dom";
import "./MobileHeader.css";
import {  FiMic } from "react-icons/fi";

type Props = {
  onMenuClick?: () => void;
  city: string;
};

const MobileHeader = ({ onMenuClick, city }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="mobile-header">
      <div className="header-safe-area" />

      <div className="header-nav">
        <button
          className="menu-btn"
          onClick={onMenuClick}
          aria-label="Menu"
        >
          ☰
        </button>

        <h1 className="header-title">
          Discover <span>{city}</span>
        </h1>
      </div>

      <div className="header-search">
        
        <input
          type="text"
          placeholder="What are you looking for?"
          onFocus={() => navigate("/search")}
        />
        <FiMic className="mic-icon" />
      </div>
    </header>
  );
};

export default MobileHeader;
