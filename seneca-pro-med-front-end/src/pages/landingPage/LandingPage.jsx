import React from "react";

import LoginComponent from "../../components/landing/LoginComponent";
import WelcomeComponent from "../../components/landing/WelcomeComponent";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <WelcomeComponent />
      <LoginComponent />
    </div>
  );
};

export default LandingPage;
