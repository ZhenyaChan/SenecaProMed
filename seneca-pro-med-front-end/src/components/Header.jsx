import React from "react";
import Logo from "../assets/images/SenecaProMed-Logo.svg";
import {
  MdShoppingCart,
  MdNotificationsNone,
  MdOutlineMenu,
} from "react-icons/md";


const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-16 border-b-0.5 border-b-textColor">
      {/* PC and tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-20 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Seneca Pro Med</p>
        </div>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            My Account
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            <MdNotificationsNone className="text-textColor text-2xl" />
          </li>
          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            <MdOutlineMenu className="text-textColor text-2xl" />
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
