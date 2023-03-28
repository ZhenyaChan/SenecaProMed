import { MdNotificationsNone, MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
import Cart from "../cart/Cart";

const PublicHeader = () => {
  const navigate = useNavigate();
  const { totalItemsCount, isCartOpen, displayCart } = useContext(CartContext);

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
        <button className="btn btn-primary py-2 px-3" onClick={() => navigate("/login")}>
          Login
        </button>
      </ul>
    </header>
  );
};

export default PublicHeader;
