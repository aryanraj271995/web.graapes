import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDevice } from "../../hooks/useDevice";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {

  const [city, setCity] = useState("Patna, Bihar");
  const { isMobile } = useDevice();

  // mobile users → web layout hide
  if (isMobile) {
    return <Outlet context={{ city }} />;
  }

  return (
    <>
      <Header city={city} setCity={setCity} />
      <Navbar />

      <Outlet context={{ city }} />

      
      <Footer />
    </>
  );
}