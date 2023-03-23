import React, { useContext, useState } from "react";
import { MdLogin, MdLogout, MdNotificationsNone, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "../../assets/images/avatar.png";
import CartContext from "../../contexts/CartContext";
import Cart from "../cart/Cart";
import AuthContext from "../../contexts/AuthContext";

const Header = () => {
  const { totalItemsCount, isCartOpen, displayCart } = useContext(CartContext);
  const { isLoggedIn, logOut } = useContext(AuthContext);

  const [displayAccountBox, setDisplayAccountBox] = useState(false);

  const handleSearch = () => {
    // TODO: implement search for products
  };

  return (
    <header className="flex justify-between items-center p-3 px-16 border-b-0.5 border-b-gray-300 bg-slate-100">
      {/* Logo */}
      <Link to={"/"} className="link text-2xl flex justify-start">
        Seneca<span className="font-bold">ProMed</span>
      </Link>

      {/* Search Tool  */}
      <div className="flex flex-grow mx-20 gap-1 items-center">
        <input type="text" className="input-field py-2 px-4 w-full" placeholder="Search for products" />
        <button className="btn py-2 px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Navigation and Tools */}
      <ul className="flex justify-end gap-8 items-center">
        {/* Home */}
        <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="link text-lg cursor-pointer">
          <Link to={"/"} className="link">
            Home
          </Link>
        </motion.li>

        {/* About Us */}
        <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} className="link text-lg cursor-pointer">
          <Link to={"/about"} className="link">
            About Us
          </Link>
        </motion.li>

        {/* Notifications */}
        <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="link text-lg cursor-pointer">
          <MdNotificationsNone className="text-2xl" />
        </motion.li>

        {/* Cart */}
        <motion.li
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="relative flex items-center justify-center hover:text-blue-700"
          onClick={() => displayCart()}
        >
          <MdShoppingCart className=" text-2xl  cursor-pointer" />

          {totalItemsCount > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">{totalItemsCount}</p>
            </div>
          )}
        </motion.li>

        {isCartOpen && <Cart />}

        {/* Account Settings */}
        <li className="relative">
          {/* Avatar */}
          <motion.img
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="Account"
            onClick={() => setDisplayAccountBox(!displayAccountBox)}
          />

          {/* Account Box */}
          {displayAccountBox && (
            <div
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-6 right-0 mx-4 my-4"
              onMouseLeave={() => {
                setDisplayAccountBox(false);
              }}
            >
              <Link
                to={"#"}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out  text-base"
              >
                My Account
              </Link>

              {isLoggedIn ? (
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out  text-base"
                  onClick={() => logOut()}
                >
                  <MdLogout /> Sign Out
                </p>
              ) : (
                <Link
                  to={"/login"}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out  text-base"
                >
                  <MdLogin /> Sign In
                </Link>
              )}
            </div>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
