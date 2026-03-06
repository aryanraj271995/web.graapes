import "./MobileSidebar.css";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

type Props = {
  open: boolean;
  onClose: () => void;
  city: string;
  setCity: (city: string) => void;
};

const MobileSidebar = ({ open, onClose, city, setCity }: Props) => {
  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}

      <aside className={`mobile-sidebar ${open ? "open" : ""}`}>
        {/* HEADER: auto + manual location */}
        <SidebarHeader
          onClose={onClose}
          city={city}
          setCity={setCity}
        />

        {/* MENU */}
        <SidebarMenu onItemClick={onClose} />

        {/* FOOTER */}
        <SidebarFooter />
      </aside>
    </>
  );
};

export default MobileSidebar;
