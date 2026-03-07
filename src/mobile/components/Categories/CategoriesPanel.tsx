import { useState } from "react";
import "./CategoriesPanel.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

/* IMAGE LINKS */

const imgForYou =
"https://www.theindiatourism.com/images/Bihar-tourist.jpg";

const imgMedical =
"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1632&auto=format&fit=crop";

const imgEmergency =
"https://images.unsplash.com/photo-1612574935301-af13ccce9258?w=500&auto=format&fit=crop&q=60";

const imgLocal =
"https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/local-service-providers-62e98843b1883-sej.png";

const imgCab =
"https://images.unsplash.com/photo-1610886023290-6ba32b20e354?q=80&w=1170&auto=format&fit=crop";

const imgHotel =
"https://www.theeasternhotel.com/uploads/gallery/NSP_1782.jpg";

const imgRestaurant =
"https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg";

const imgEducation =
"https://indiafoundation.in/wp-content/uploads/2024/09/10.-Picture-for-article-10.jpg";

const imgRealEstate =
"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500";

const imgBeauty =
"https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500";

const imgGym =
"https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg";


/* CATEGORY DATA */

const categories = [
  {
    name: "For You",
    icon: imgForYou,
    services: ["Popular", "Trending", "Recommended"]
  },
  {
    name: "Medical",
    icon: imgMedical,
    services: ["Hospitals","Clinics","Pharmacy","Ambulance"]
  },
  {
    name: "Emergency",
    icon: imgEmergency,
    services: ["Ambulance","Police","Fire"]
  },
  {
    name: "Local Services",
    icon: imgLocal,
    services: ["Electrician","Plumber","Carpenter","AC Repair"]
  },
  {
    name: "Cab Booking",
    icon: imgCab,
    services: ["City Cab","Bike Taxi","Airport Ride"]
  },
  {
    name: "Hotels",
    icon: imgHotel,
    services: ["Luxury Hotel","Budget Hotel","Guest House"]
  },
  {
    name: "Restaurants",
    icon: imgRestaurant,
    services: ["Veg","Non Veg","Cafe","Street Food"]
  },
  {
    name: "Education",
    icon: imgEducation,
    services: ["Schools","Colleges","Coaching","Libraries"]
  },
  {
    name: "Real Estate",
    icon: imgRealEstate,
    services: ["Buy Property","Rent House","PG"]
  },
  {
    name: "Beauty & Saloon",
    icon: imgBeauty,
    services: ["Saloon","Spa","Makeup Artist"]
  },
  {
    name: "Gym & Fitness",
    icon: imgGym,
    services: ["Gym","Yoga","Zumba","Trainer"]
  }
];

export default function CategoriesPanel({ open, onClose }: Props) {

  const [active,setActive] = useState(0);

  if(!open) return null;

  const activeCategory = categories[active];

  return (

    <div className="categories-overlay">

      <div className="categories-container">

        {/* HEADER */}

        <div className="categories-header">
          <button onClick={onClose}>←</button>
          <h3>All Categories</h3>
        </div>


        <div className="categories-body">

          {/* SIDEBAR */}

          <div className="categories-sidebar">

            {categories.map((cat,i)=>(
              <div
                key={i}
                onClick={()=>setActive(i)}
                className={`sidebar-item ${active===i?"active":""}`}
              >

                <img
                  src={cat.icon}
                  className="category-icon"
                />

                <span>{cat.name}</span>

              </div>
            ))}

          </div>


          {/* RIGHT CONTENT */}

          <div className="categories-content">

            <div className="promo-card">
              <h4>{activeCategory.name}</h4>
              <p>Explore services near you</p>
            </div>

            <div className="grid-services">

              {activeCategory.services.map((s,i)=>(
                <div key={i} className="service-card">
                  {s}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}