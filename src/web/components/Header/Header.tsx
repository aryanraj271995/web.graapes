import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import AuthModal from "../Header/AuthModal";
import "./Header.css";

type LocationBarProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export default function LocationBar({ city, setCity }: LocationBarProps) {

  const [manualMode, setManualMode] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const [search, setSearch] = useState("");
  const [showAuth, setShowAuth] = useState(false);

  const examples = [
    "Hospitals near me",
    "Electrician in city",
    "Best hotels",
    "Gym near me"
  ];

  const getCityName = async (lat: number, lon: number) => {

    try {

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`
      );

      const data = await res.json();
      const address = data.address;

      const detectedCity =
        address.city ||
        address.town ||
        address.village ||
        address.state_district ||
        "";

      const state = address.state || "";

      if (detectedCity && state) {

        const fullCity = `${detectedCity}, ${state}`;

        setCity(fullCity);
        localStorage.setItem("selectedCity", fullCity);

      } else {

        setCity("Location not found");
        setManualMode(true);

      }

    } catch {

      setCity("Unable to detect");
      setManualMode(true);

    }
  };

  useEffect(() => {

    const savedCity = localStorage.getItem("selectedCity");

    if (savedCity) {
      setCity(savedCity);
      return;
    }

    if (!navigator.geolocation) {
      setManualMode(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        getCityName(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        setManualMode(true);
      }
    );

  }, []);

  const handleManualSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter" && manualInput.trim() !== "") {

      setCity(manualInput);
      localStorage.setItem("selectedCity", manualInput);

      setManualInput("");
      setManualMode(false);

    }

  };

  return (

    <div className="location-bar">

      {/* LEFT - LOCATION */}

      <div className="location-container">

        <Link to="/">
          <FaHome className="home-icon" />
        </Link>

        <span className="home-text">{city}</span>

        {!manualMode ? (

          <div
            className="location-display"
            onClick={() => setManualMode(true)}
          >
            <FaMapMarkerAlt className="map-icon" />
            <span>{city}</span>
          </div>

        ) : (

          <input
            type="text"
            placeholder="Enter city (e.g. Gaya)"
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            onKeyDown={handleManualSubmit}
            className="manual-input"
            autoFocus
          />

        )}

      </div>


      {/* CENTER - SEARCH */}

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for city, area & more"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        {search && (
          <div className="search-suggestions">
            {examples
              .filter(item =>
                item.toLowerCase().includes(search.toLowerCase())
              )
              .map((item,i)=>(
                <div key={i} className="suggestion-item">
                  {item}
                </div>
              ))
            }
          </div>
        )}

      </div>


      {/* RIGHT - ACCOUNT */}

      <div
        className="account"
        onClick={()=>setShowAuth(true)}
      >
        Sign-In <FaUser/>
      </div>

      {showAuth && (
        <AuthModal close={()=>setShowAuth(false)}/>
      )}

    </div>
  );
}