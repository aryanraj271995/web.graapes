import { useEffect, useState } from "react";
import "./LocationPopup.css";

type Props = {
  onClose: () => void;
  city: string;
  setCity: (city: string) => void;
};

const LocationPopup = ({ onClose, city, setCity }: Props) => {

  const [manualCity, setManualCity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const savedCity = localStorage.getItem("selectedCity");

    if (savedCity) {
      setCity(savedCity);
      return;
    }

    if (!navigator.geolocation) return;

    setLoading(true);

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
            address?.state;

          if (detectedCity) {

            setCity(detectedCity);
            localStorage.setItem("selectedCity", detectedCity);

          }

        } catch (e) {}

        setLoading(false);

      },
      () => setLoading(false)
    );

  }, [setCity]);

  return (

    <div className="location-overlay">

      <div className="location-popup">

        <div className="popup-header">

          <h3>Select Location</h3>

          <button onClick={onClose}>✕</button>

        </div>

        <p className="current-location">
          {loading ? "Detecting location..." : city}
        </p>

        <div className="manual-box">

          <input
            type="text"
            placeholder="Enter city name"
            value={manualCity}
            onChange={(e)=>setManualCity(e.target.value)}
          />

          <button
            onClick={()=>{

              if(!manualCity.trim()) return;

              const value = manualCity.trim();

              setCity(value);

              localStorage.setItem("selectedCity", value);

              onClose();

            }}
          >
            →
          </button>

        </div>

      </div>

    </div>

  );
};

export default LocationPopup;