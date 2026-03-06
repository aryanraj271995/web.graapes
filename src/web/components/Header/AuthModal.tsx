import "./auth.css";

export default function AuthModal({close}:{close:()=>void}) {

  return (

    <div className="auth-overlay">

      <div className="auth-box">

        <h2>Sign In</h2>

        <input placeholder="Email or Phone"/>

        <input type="password" placeholder="Password"/>

        <button className="login-btn">
          Login
        </button>

        <p className="signup">
          New user? Create account
        </p>

        <span
          className="close"
          onClick={close}
        >
          ✕
        </span>

      </div>

    </div>

  );
}