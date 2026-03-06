import MobileFooter from "../components/footer/MobileFooter";

import HeroIcons from "../components/hero/HeroIcons";
import HeroSlider from "../components/hero/HeroSlider";
import HeroCards from "../components/hero/HeroCards";

export default function MobileHome() {
  return (
    <>
      <main>
        <HeroIcons />
        <HeroSlider />
        <HeroCards />
      </main>

      <MobileFooter />
    </>
  );
}
