import { useEffect, useState } from "react";

type Props = {
  onClose: () => void;
  city: string;
  setCity: (city: string) => void;
};

const SidebarHeader = ({ onClose, city, setCity }: Props) => {
  const [loading, setLoading] = useState(false);
  const [showManual, setShowManual] = useState(false);
  const [manualCity, setManualCity] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setShowManual(true);
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          const detectedCity =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.state;

          if (detectedCity) {
            setCity(detectedCity);
          }
        } catch (e) {
          // silent fail
        } finally {
          setLoading(false);
          setTimeout(() => setShowManual(true), 200);
        }
      },
      () => {
        setLoading(false);
        setShowManual(true);
      },
      { timeout: 8000 }
    );
  }, [setCity]);

  return (
    <div className="sidebar-header">
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h3>Graapes</h3>
            <p className={loading ? "loading" : ""}>
              {loading ? "Detecting location…" : city}
            </p>
          </div>

          <button onClick={onClose}>✕</button>
        </div>

        {showManual && (
          <div className="header-location-box slide-down">
            <input
              type="text"
              placeholder="Enter city name"
              value={manualCity}
              onChange={(e) => setManualCity(e.target.value)}
            />
            <button
              onClick={() => {
                if (manualCity.trim()) {
                  setCity(manualCity.trim());
                  setManualCity("");
                  onClose();
                }
              }}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;
