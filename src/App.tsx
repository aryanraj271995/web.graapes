import { Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import MainLayout from "./web/layout/MainLayout";
import Home from "./web/pages/Home";
import MobileApp from "./mobile/MobileApp";

function App() {
  const { isMobile } = useDevice();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={isMobile ? <MobileApp /> : <Home />} />
      </Route>
    </Routes>
  );
}

export default App;

