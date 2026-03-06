import "./navbar.css";

export default function Navbar() {

  return (
    <div className="navbar">

      <a className="nav-item active">Home</a>

      <div className="nav-item dropdown">
        City Services
        <div className="dropdown-menu">
          <span>Electrician</span>
          <span>Plumber</span>
          <span>Carpenter</span>
          <span>More</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        Medical
        <div className="dropdown-menu">
          <span>Hospitals</span>
          <span>Clinics</span>
          <span>Pharmacy</span>
          <span>Lab Testing</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        Heath & Beauty
        <div className="dropdown-menu">
          <span>Salon</span>
          <span>Gym</span>
          <span>Spa</span>
          <span>Boutique</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        Education
        <div className="dropdown-menu">
          <span>Schools</span>
          <span>Colleges</span>
          <span>Job Portal</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        Real Estate
        <div className="dropdown-menu">
          <span>Buy Property</span>
          <span>Rent Property</span>
          <span>Commercial</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        Explore States
        <div className="dropdown-menu">
          <span>Bihar</span>
          <span>Uttar Pradesh</span>
          <span>Jharkhand</span>
          <span>West Bengal</span>
        </div>
      </div>

      <div className="nav-item dropdown">
        24/7 Support
        <div className="dropdown-menu">
          <span>Help Center</span>
          <span>Contact Us</span>
        </div>
      </div>

    </div>
  );
}