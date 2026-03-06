import { useEffect, useState } from "react";

export function useLocation() {

  const [city, setCity] = useState("Detecting...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!navigator.geolocation) {
      setCity("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(

      async (pos) => {

        const { latitude, longitude } = pos.coords;

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
          );

          const data = await res.json();

          const detectedCity =
            data?.address?.city ||
            data?.address?.town ||
            data?.address?.village ||
            data?.address?.state ||
            "Unknown";

          setCity(detectedCity);
          setLoading(false);

        } catch {
          setCity("Location error");
          setLoading(false);
        }

      },

      () => {
        setCity("Permission denied");
        setLoading(false);
      }

    );

  }, []);

  return { city, loading };
}