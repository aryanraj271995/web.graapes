import { useState, useEffect } from "react";
import "./PremiumSlider.css";

type Slide = {
  title: string;
  sub: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Serving Bihar",
    sub: "24/7 Services",
    image:
      "https://www.theindiatourism.com/images/Bihar-tourist.jpg",
  },
  {
    title: "Medical Services",
    sub: "Best Hospitals & Clinics",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Emergency Support",
    sub: "Ambulance & Help",
    image:
      "https://images.unsplash.com/photo-1612574935301-af13ccce9258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVtZXJnZW5jeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Local Services",
    sub: "All Local Needs",
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/local-service-providers-62e98843b1883-sej.png",
  },
  {
    title: "Cab Booking",
    sub: "Ride Anytime",
    image:
      "https://images.unsplash.com/photo-1610886023290-6ba32b20e354?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hotels",
    sub: "Comfort Stay",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/535752891.jpg?k=5e27db61b1077d47d55a75f40194ed08d2c1dc30536f3e6810253e8085256940&o=",
  },
  {
    title: "Restaurants",
    sub: "Best Food Spots",
    image:
      "https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg",
  },
  {
    title: "Education",
    sub: "Schools & Colleges",
    image:
      "https://indiafoundation.in/wp-content/uploads/2024/09/10.-Picture-for-article-10.jpg",
  },
  {
    title: "Saloon",
    sub: "Beauty & Grooming",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/387854114/HY/LV/US/153567228/saloon-interior-designing-services.jpeg",
  },
  {
    title: "Gym & Fitness",
    sub: "Stay Fit",
    image:
      "https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg",
  },
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