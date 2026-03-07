import { useState } from "react";

import MobileFooter from "../components/footer/MobileFooter";
import CategoriesPanel from "../components/Categories/CategoriesPanel";

import HeroIcons from "../components/hero/HeroIcons";
import HeroSlider from "../components/hero/HeroSlider";
import HeroCards from "../components/hero/HeroCards";

export default function MobileHome() {

  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <main>
        <HeroIcons />
        <HeroSlider />
        <HeroCards />
      </main>

      <MobileFooter
        openCategories={() => setShowCategories(true)}
      />

      <CategoriesPanel
        open={showCategories}
        onClose={() => setShowCategories(false)}
      />
    </>
  );
}