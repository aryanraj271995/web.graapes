import { Routes, Route } from "react-router-dom";
import MobileHome from "../pages/MobileHome";
import MobileHeader from "../components/header/MobileHeader";

type Props = {
  city: string;
  onMenuClick: () => void;
};

export default function MobileRoutes({ city, onMenuClick }: Props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MobileHeader city={city} onMenuClick={onMenuClick} />
            <MobileHome />
          </>
        }
      />
    </Routes>
  );
}
