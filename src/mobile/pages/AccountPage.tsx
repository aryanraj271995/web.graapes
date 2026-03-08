import "./AccountPage.css";
import LoginModal from "../../auth/LoginModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiPhone, FiMapPin, FiSettings, FiLogOut } from "react-icons/fi";

export default function AccountPage() {

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="account-page">

      {/* TOP BAR */}
      <div className="account-topbar">

        <button className="back-btn" onClick={() => navigate("/")}>
          <FiArrowLeft />
        </button>

        <h2>Back to Home</h2>

      </div>


      {/* Profile Section */}

      <div className="profile-card">

        <div className="avatar">A</div>

        <div className="profile-info">
          <h3>Guest User</h3>
          <p>Login to manage your account</p>
        </div>

        <button
          className="login-btn"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </div>


      {/* Options */}

      <div className="account-list">

        <div className="account-item">
          <FiUser />
          <span>Profile</span>
        </div>

        <div className="account-item">
          <FiPhone />
          <span>Contact Details</span>
        </div>

        <div className="account-item">
          <FiMapPin />
          <span>Saved Addresses</span>
        </div>

        <div className="account-item">
          <FiSettings />
          <span>Settings</span>
        </div>

        <div className="account-item logout">
          <FiLogOut />
          <span>Logout</span>
        </div>

      </div>

      {/* LOGIN MODAL */}

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}

    </div>
  );
}