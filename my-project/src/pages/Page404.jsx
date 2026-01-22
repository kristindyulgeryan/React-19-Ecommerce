import { Link } from "react-router";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="back-home-button">
          Back to Home Page
        </Link>

        <div className="error-illustration">
          <img
            src="/images/icons/checkout-lock-icon.png"
            alt="Error Icon"
            style={{ opacity: 0.5, width: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page404;
