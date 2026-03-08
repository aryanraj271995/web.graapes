import { useNavigate } from "react-router-dom";
import "./MobileHeader.css";
import { FiMic, FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaAmbulance, FaTaxi, FaTools, FaHeadset } from "react-icons/fa";

type Props = {
  city: string;
  onLocationClick: () => void;
};

const MobileHeader = ({ city, onLocationClick }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="mobile-header">

      {/* Quick Services */}
      <div className="quick-services">

        <div className="service-box">
          <FaAmbulance />
          <span>Emergency</span>
        </div>

        <div className="service-box">
          <FaTaxi />
          <span>Travel</span>
        </div>

        <div className="service-box">
          <FaTools />
          <span>Service</span>
        </div>

        <div className="service-box">
          <FaHeadset />
          <span>Support</span>
        </div>

      </div>

      {/* Location Row */}
      <div
        className="location-row"
        role="button"
        onClick={onLocationClick}
      >
        <div className="location-left">
          <FiMapPin />
          <span>{city}</span>
        </div>

        <FiChevronRight className="location-arrow" />
      </div>

      {/* Search */}
      <div className="header-search">

        <input
          type="text"
          placeholder="Search services, places..."
          onFocus={() => navigate("/search")}
        />

        <FiMic className="mic-icon" />

      </div>

    </header>
  );
};

export default MobileHeader;