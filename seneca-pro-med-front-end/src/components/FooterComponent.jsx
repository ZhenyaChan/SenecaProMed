import React from "react";

import "./FooterComponent.css";

// this line will force eslint to ignore checking for errors in the line after:
/* eslint-disable-next-line */

const FooterComponent = () => {
  return (
    <footer className="FooterComponent">
      <div className="information-section">
        <div className="account">
          <h1>Account</h1>
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Login</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Register</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Order Status</a>
            </li>
          </ul>
        </div>

        <div className="about-us">
          <h1>About Us</h1>
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Our Story</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="help">
          <h1>Help</h1>
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Contact Us</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Order Status</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>

        <div className="follow-us">
          <h1>Follow Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore distinctio id laborum fuga vel reiciendis beatae fugit aut
            excepturi sint, accusantium maiores ad deserunt!
          </p>
          <ul className="social-icons">
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Instagram</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Facebook</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-section">
        <h1 className="logo">SenecaProMed</h1>
        <p>&copy; SenecaProMed, 123 Street St., North York, Ontario L4L 4L4</p>
        <div className="terms-and-policy">
          {/* eslint-disable-next-line */}
          <a href="#">Terms of Use</a>
          {/* eslint-disable-next-line */}
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
