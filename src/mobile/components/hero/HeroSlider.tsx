import { useEffect, useRef, useState } from "react";
/*import { useNavigate } from "react-router-dom";*/
import "./HeroSlider.css";

const SLIDES = [
  { image: "https://www.shutterstock.com/image-photo/beautiful-view-sher-shah-suri-600nw-2430354163.jpg", title: "Bihar Services", path: "/explore" },
  { image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Medical Services", path: "/medical" },
  { image: "https://images.unsplash.com/photo-1612574935301-af13ccce9258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVtZXJnZW5jeXxlbnwwfHwwfHx8MA%3D%3D", title: "Emergency Support", path: "/emergency" },
  { image: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/local-service-providers-62e98843b1883-sej.png", title: "Local Services", path: "/local-services" },
  { image: "https://images.unsplash.com/photo-1610886023290-6ba32b20e354?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Cab Booking", path: "/cab-booking" },
  { image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/535752891.jpg?k=5e27db61b1077d47d55a75f40194ed08d2c1dc30536f3e6810253e8085256940&o=", title: "Hotels", path: "/hotels" },
  { image: "https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg", title: "Restaurants", path: "/restaurants" },
  { image: "https://indiafoundation.in/wp-content/uploads/2024/09/10.-Picture-for-article-10.jpg", title: "Education", path: "/education" },
  { image: "https://5.imimg.com/data5/SELLER/Default/2024/2/387854114/HY/LV/US/153567228/saloon-interior-designing-services.jpeg", title: "Saloon", path: "/saloon" },
  { image: "https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg", title: "Gym", path: "/gym" },
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

  /* 🎯 MOVE SLIDER */
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