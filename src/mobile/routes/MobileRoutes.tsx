import { Routes, Route } from "react-router-dom";
import MobileHome from "../pages/MobileHome";
import MobileHeader from "../components/header/MobileHeader";
import AccountPage from "../pages/AccountPage";   // ⭐ add

type Props = {
  city: string;
  onLocationClick: () => void;
};

export default function MobileRoutes({ city, onLocationClick }: Props) {
  return (
    <>
      <MobileHeader city={city} onLocationClick={onLocationClick} />

      <Routes>
        <Route
          path="/"
          element={<MobileHome />}
        />

        {/* ⭐ new route */}
        <Route 
          path="/account" 
          element={<AccountPage />} />

      </Routes>
    </>
  );
}