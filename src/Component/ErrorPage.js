import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="error_in">
        <h1 style={{ fontFamily: "Montserrat" }}>Page Not Found : 404</h1>
        <button className="btn">
          <Link to="/">Go to Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
