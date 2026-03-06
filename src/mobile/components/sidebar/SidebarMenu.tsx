import { NavLink } from "react-router-dom";

type Props = {
  onItemClick: () => void;
};

const menu = [
  { label: "Home", path: "/" },
  { label: "Explore Bihar", path: "/explore" },
  { label: "Serving Cities", path: "/cities" },
  { label: "Bhaiya GPT", path: "/ai" },
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
