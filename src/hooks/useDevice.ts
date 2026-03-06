import { useEffect, useState } from "react";

export function useDevice() {

  const getDevice = () => window.innerWidth <= 768;

  const [isMobile, setIsMobile] = useState(getDevice());

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(getDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return { isMobile };
}