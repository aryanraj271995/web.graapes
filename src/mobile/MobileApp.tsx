import MobileRoutes from "./routes/MobileRoutes";
import { useState } from "react";
import MobileSidebar from "./components/sidebar/MobileSidebar";

function MobileApp() {
  const [city, setCity] = useState("Patna");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("Menu clicked");
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <MobileSidebar
        open={isSidebarOpen}
        onClose={closeSidebar}
        city={city}
        setCity={setCity}
      />

      <MobileRoutes
        city={city}
        onMenuClick={handleMenuClick}
      />
    </>
  );
}

export default MobileApp;