import "./LoginModal.css";

type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  return (
    <div className="auth-overlay">

      <div className="auth-box">

        <span className="close" onClick={onClose}>×</span>

        <h2>Sign In</h2>

        <input placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <p>New user? Create account</p>

      </div>

    </div>
  );
}