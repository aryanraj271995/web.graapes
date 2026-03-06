import { useNavigate } from "react-router-dom";
import "./HeroCards.css";

const CARDS = [
  {
    title: "Live City",
    subtitle: "Trusted medical services",
    image:
      "https://www.prabhatkhabar.com/_next/image?url=https%3A%2F%2Fwpmedia.prabhatkhabar.com%2Fuploads%2F2025%2F09%2FBihar-News-34.jpg&w=3840&q=75",
    path: "/medical",
  },
  {
    title: "Live Bazar",
    subtitle: "Comfortable stays",
    image:
      "https://silverkris.singaporeair.com/wp-content/uploads/2017/03/indiamarket.jpg",
    path: "/hotels",
  },
  {
    title: "Street Market",
    subtitle: "Food people love",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    path: "/restaurants",
  },
];

export default function HeroCards() {
  const navigate = useNavigate();

  return (
    <section className="hero-cards">
      <div className="hero-cards-header">
        <h3>Most Popular</h3>
        <button onClick={() => navigate("/")}>View All</button>
      </div>

      <div className="hero-cards-list">
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="hero-card"
           // onClick={() => navigate(card.path)}
          >
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
              <h4>{card.title}</h4>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
