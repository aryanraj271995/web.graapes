import MobileRoutes from "./routes/MobileRoutes";
import { useState, useEffect } from "react";
import LocationPopup from "./components/location/LocationPopup";

function MobileApp() {
  const [city, setCity] = useState("Detecting...");
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      setCity(savedCity);
      return;
    }

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await res.json();
          const address = data.address;

         const detectedCity =
  address?.city ||
  address?.town ||
  address?.village ||
  address?.municipality ||
  address?.county ||
  address?.state_district||
  address?.state_town;

          if (detectedCity) {
            setCity(detectedCity);
            localStorage.setItem("selectedCity", detectedCity);
          }
        } catch (e) {}
      },
      () => {}
    );
  }, []);

  const handleLocationClick = () => {
    setShowLocation(true);
  };

  return (
    <>
      <div className="ambient-orb"></div>
      
      {showLocation && (
        <LocationPopup
          city={city}
          setCity={setCity}
          onClose={() => setShowLocation(false)}
        />
      )}

      <MobileRoutes
        city={city}
        onLocationClick={handleLocationClick}
      />
    </>
  );
}

export default MobileApp;