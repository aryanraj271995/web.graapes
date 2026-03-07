import { NavLink } from "react-router-dom";

type Props = {
  onItemClick: () => void;
};

const menu = [
  { label: "Home", path: "/" },
  { label: "City Services", path: "/" },
  { label: "Medical", path: "/" },
  { label: "Health & Beauty", path: "/" },
  { label: "Education", path: "/" },
  { label: "Reak Estate", path: "/" },
  { label: "Explore States", path: "/" },
  { label: "Cab Service", path: "/" },
  { label: "24/7 Support", path: "/" },
];

const SidebarMenu = ({ onItemClick }: Props) => {
  return (
    <nav className="sidebar-menu">
      {menu.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarMenu;
