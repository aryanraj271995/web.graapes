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

    const savedCity = localStorage.getItem("selectedCity");

    // ✅ अगर city पहले से saved है
    if (savedCity) {
      setCity(savedCity);
      setShowManual(true); // manual change option visible
      return;
    }

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
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
          );

          const data = await res.json();
          const address = data.address;

          const detectedCity =
            address?.city ||
            address?.town ||
            address?.village ||
            address?.municipality ||
            address?.county ||
            address?.state_district ||
            address?.state;

          const state = address?.state || "";

          if (detectedCity) {

            const fullCity = state
              ? `${detectedCity}, ${state}`
              : detectedCity;

            setCity(fullCity);
            localStorage.setItem("selectedCity", fullCity);

          }

        } catch (e) {
          // silent fail
        } finally {
          setLoading(false);
          setShowManual(true); // manual option always visible
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

            {/* change city button */}
            <span
              style={{
                fontSize: "12px",
                color: "#7c6cff",
                cursor: "pointer",
              }}
              onClick={() => setShowManual(!showManual)}
            >
              Change city
            </span>

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

                  const manual = manualCity.trim();

                  setCity(manual);
                  localStorage.setItem("selectedCity", manual);

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