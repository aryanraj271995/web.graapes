import { useEffect, useRef, useState } from "react";
/*import { useNavigate } from "react-router-dom";*/
import "./HeroSlider.css";

/* LOCAL IMAGES (same as web hero) */
import skylineImg from "../../assets/bihar-background.png";
import skylineImg1 from "../../assets/Medical Services.png";
import skylineImg2 from "../../assets/Emergency Support.png";
import skylineImg3 from "../../assets/local services.png";
import skylineImg4 from "../../assets/cab services.png";
import skylineImg5 from "../../assets/Hotel.png";
import skylineImg6 from "../../assets/restaurants.png";
import skylineImg7 from "../../assets/education.png";
import skylineImg8 from "../../assets/saloon.png";
import skylineImg9 from "../../assets/gym.png";

const SLIDES = [
  { image: skylineImg, title: "Bihar Services", path: "/explore" },
  { image: skylineImg1, title: "Medical Services", path: "/medical" },
  { image: skylineImg2, title: "Emergency Support", path: "/emergency" },
  { image: skylineImg3, title: "Local Services", path: "/local-services" },
  { image: skylineImg4, title: "Cab Booking", path: "/cab-booking" },
  { image: skylineImg5, title: "Hotels", path: "/hotels" },
  { image: skylineImg6, title: "Restaurants", path: "/restaurants" },
  { image: skylineImg7, title: "Education", path: "/education" },
  { image: skylineImg8, title: "Saloon", path: "/saloon" },
  { image: skylineImg9, title: "Gym", path: "/gym" },
];

export default function HeroSlider() {
  /*const navigate = useNavigate();*/
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* 🎯 MOVE SLIDER (mobile friendly) */
  useEffect(() => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div className="hero-slider-wrapper">
      <div className="hero-slider" ref={sliderRef}>
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="hero-slide"
            /*onClick={() => navigate(slide.path)}*/
          >
            <img src={slide.image} alt={slide.title} />
            <div className="slide-overlay">
              <span>{slide.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
