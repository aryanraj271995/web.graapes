import { Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import MainLayout from "./web/layout/MainLayout";
import Home from "./web/pages/Home";
import MobileApp from "./mobile/MobileApp";

function App() {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <>
      <div className="ambient-orb"></div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;