import { useState, useEffect } from "react";
import "./PremiumSlider.css";

import slide1Img from "../../../assets/bihar-background.png";
import slide2Img from "../../../assets/cityServices.png";
import slide3Img from "../../../assets/Hotel.png";
import slide4Img from "../../../assets/gym.png";
import slide5Img from "../../../assets/bihar-skyline.jpg";

type Slide = {
  title: string;
  sub: string;
  image: string;
};

const slides: Slide[] = [
  { title: "Serving Bihar", sub: "24/7 Services", image: slide1Img },
  { title: "City Services", sub: "At a Single Click", image: slide2Img },
  { title: "Hotel & Restaurants", sub: "No fake Review", image: slide3Img },
  { title: "Gym & Fitness Center", sub: "At Single Click", image: slide4Img },
  { title: "Tourist Places", sub: "Religious & Famous Spot", image: slide5Img },
];

export default function PremiumSlider() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="premium-slider">

      <div
        className="premium-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="premium-slide">

            <img src={slide.image} alt={slide.title} />

            <div className="premium-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.sub}</p>
            </div>

          </div>
        ))}
      </div>

      <div className="premium-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}