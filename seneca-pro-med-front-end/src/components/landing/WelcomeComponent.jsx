import React from "react";

import "./WelcomeComponent.css";

import logo from "../../assets/images/SenecaProMed-Logo.svg";

const WelcomeComponent = () => {
  return (
    <div className="WelcomeComponent">
      <img className="logo" src={logo} alt="SenecaProMed-Logo.svg" width="200px" />
      <h1 className="description text-3xl font-normal">
        Welcome to Seneca<span className="proMed-part font-bold">ProMed</span>
      </h1>
    </div>
  );
};

export default WelcomeComponent;
