import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiTool,
  FiTruck,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";
import { MdLocalHospital, MdEmergency } from "react-icons/md";
import { FaHotel, FaUtensils } from "react-icons/fa";
import "./HeroIcons.css";

const ICONS = [
  {
    label: "Medical",
    icon: <MdLocalHospital />,
    path: "/",
    bg: "#ef4444", // red
  },
  {
    label: "Emergency",
    icon: <MdEmergency />,
    path: "/",
    bg: "#f97316", // orange
  },
  {
    label: "Local Services",
    icon: <FiTool />,
    path: "/",
    bg: "#22c55e", // green
  },
  {
    label: "Cab Booking",
    icon: <FiTruck />,
    path: "/",
    bg: "#3b82f6", // blue
  },
  {
    label: "Hotels",
    icon: <FaHotel />,
    path: "/",
    bg: "#a855f7", // purple
  },
  {
    label: "Restaurants",
    icon: <FaUtensils />,
    path: "/",
    bg: "#eab308", // yellow
  },
  {
    label: "Education",
    icon: <FiBookOpen />,
    path: "/",
    bg: "#0ea5e9", // sky
  },
  {
    label: "Explore Cities",
    icon: <FiMapPin />,
    path: "/",
    bg: "#14b8a6", // teal
  },
];

export default function HeroIcons() {
  const navigate = useNavigate();

  return (
    <div className="hero-icons-wrapper">
      <div className="hero-icons-scroll">
        {ICONS.map((item, index) => (
          <button
            key={index}
            className="hero-icon"
            onClick={() => navigate(item.path)}
          >
            {/* 🔥 THIS IS THE MAIN FIX */}
            <div
              className="icon-box"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>
            <span>{item.label}</span>
          </button>
        ))}

        {/* SEE MORE */}
        <button
          className="hero-icon see-more"
          onClick={() => navigate("/")}
        >
          <div className="icon-box" style={{ backgroundColor: "#e5e7eb" }}>
            <FiPlus />
          </div>
          <span>See More</span>
        </button>
      </div>
    </div>
  );
}
