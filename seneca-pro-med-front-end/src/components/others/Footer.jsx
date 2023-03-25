import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-300 border-t-[1px] border-gray-500 py-8 gap-10">
      <div className="grid grid-cols-4 px-32 justify-items-start">
        <div className="account flex flex-col gap-4">
          <h1 className="text-lg font-bold">Account</h1>

          <div className="flex flex-col">
            <Link className="link" to={"/login"}>
              Login
            </Link>
            <Link className="link" to={"/signUp"}>
              Register
            </Link>
            <Link className="link" to={"#"}>
              Order Status
            </Link>
          </div>
        </div>

        <div className="about-us flex flex-col gap-4">
          <h1 className="text-lg font-bold">About Us</h1>

          <div className="flex flex-col">
            <Link className="link" to={"#"}>
              Our Story
            </Link>
            <Link className="link" to={"/pharmacy/locations"}>
              Our Locations
            </Link>
            <Link className="link" to={"#"}>
              Careers
            </Link>
          </div>
        </div>

        <div className="help flex flex-col gap-4">
          <h1 className="text-lg font-bold">Help</h1>

          <div className="flex flex-col">
            <Link className="link" to={"#"}>
              Contact Us
            </Link>
            <Link className="link" to={"#"}>
              Order Status
            </Link>
            <Link className="link" to={"#"}>
              Returns
            </Link>
          </div>
        </div>

        <div className="follow-us flex flex-col gap-4">
          <h1 className="text-lg font-bold">Follow Us</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nihil reiciendis, eveniet vitae id dolores.
          </p>

          <div className="flex flex-row gap-5 underline">
            <Link className="link" to={"#"}>
              Instagram
            </Link>
            <Link className="link" to={"#"}>
              Facebook
            </Link>
            <Link className="link" to={"#"}>
              Twitter
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <Link to={"/"} className="link text-2xl flex justify-start">
          Seneca<span className="font-bold">ProMed</span>
        </Link>

        <p>&copy; SenecaProMed, 123 Street St., North York, Ontario L4L 4L4</p>

        <div className="flex flex-row gap-5 underline">
          <Link className="link" to={"#"}>
            Terms of Use
          </Link>
          <Link className="link" to={"#"}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
