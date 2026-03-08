import { useState } from "react";
import LocationPopup from "../components/location/LocationPopup";

type Props = {
  children?: React.ReactNode;
};

export default function MobileSection({ children }: Props) {

  const [city, setCity] = useState("Detecting...");
  const [showLocation, setShowLocation] = useState(false);

  return (
    <section>

      {children}

      {showLocation && (
        <LocationPopup
          city={city}
          setCity={setCity}
          onClose={() => setShowLocation(false)}
        />
      )}

    </section>
  );
}