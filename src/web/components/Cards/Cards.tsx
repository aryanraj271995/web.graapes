import "./cards.css";
import { useOutletContext, Link } from "react-router-dom";

type ContextType = {
  city: string;
};

const products = [
  { title: "City Online", className: "card-one", slug: "live-city" },
  { title: "Live Bazar", className: "card-two", slug: "live-bazar" },
  { title: "Street Markets", className: "card-three", slug: "street-market" },
  { title: "Hotel & Restaurants", className: "card-four", slug: "hotels" },
];

export default function Cards() {
  const { city } = useOutletContext<ContextType>();

  // clean + SEO friendly city slug
  const cleanCity = city
    ?.split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className="special-wrapper">
      <h2 className="special-title">
        Welcome to {city?.split(",")[0]} an Online Virtual City.
      </h2>

      <div className="special-grid">
        {products.map((item, index) => (
          <Link
            to={`/${cleanCity}/${item.slug}`}
            key={index}
            className="card-link"
          >
            <div className={`special-card ${item.className}`}>
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}