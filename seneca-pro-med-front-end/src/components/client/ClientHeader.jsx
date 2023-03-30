import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdLogout, MdOutlineLocationOn, MdShoppingCart,MdAccountCircle,MdOutlineHistory   } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import useRoleCheck from "../../useRoleCheck.js";
import { motion } from "framer-motion";
import CartContext from "../../contexts/CartContext";
import Cart from "../cart/Cart";
import { useNavigate } from "react-router-dom";

const ClientHeader = () => {
  useRoleCheck("client");
  const navigate = useNavigate();

  const { totalItemsCount, isCartOpen, displayCart } = useContext(CartContext);
  const [displayAccountBox, setDisplayAccountBox] = useState(false);
  const { logOut, userData } = useContext(AuthContext);

  const handleSearch = () => {
    // TODO
  };
  const Account = () =>{
  
    navigate(`../client/${userData.id}`);
  }

  const orderHistory = () =>{
    navigate(`../client/orders/${userData.id}`);
  }
  return (
    <header className="flex justify-between items-center p-3 px-16 border-b-0.5 border-b-gray-300 bg-slate-100 gap-8">
      {/* Logo */}
      <Link to={"/"} className="link text-2xl flex justify-start">
        Seneca<span className="font-bold">ProMed</span>
      </Link>

      {/* Address */}
      <div className="flex flex-row items-center justify-center gap-2">
        <MdOutlineLocationOn className="text-[30px] text-black" />
        <div className="flex flex-col leading-tight">
          <p className="font-bold">{userData.street}</p>
          <p>
            {userData.city}, {userData.province} {userData.postalCode}
          </p>
        </div>
      </div>

      {/* Search Tool  */}
      <div className="flex flex-grow gap-1 items-center">
        <input type="text" className="input-field py-2 px-4 w-full" placeholder="Search for a product" />

        <button className="btn py-2 px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Cart */}
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        className="relative flex items-center justify-center hover:text-blue-700"
        onClick={() => displayCart()}
      >
        <MdShoppingCart className="text-2xl  cursor-pointer" />

        {totalItemsCount > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">{totalItemsCount}</p>
          </div>
        )}
      </motion.div>

      {isCartOpen && <Cart />}

      {/* Account Settings */}
      <div className="flex justify-end gap-8 items-center relative">
        {/* My Account */}
        <div className="flex flex-row items-center gap-4 font-bold">
          <p className="cursor-default">Hi, {userData.firstName}</p>
          <BiMenu
            className="text-[30px] cursor-pointer hover:text-blue-700"
            onClick={() => setDisplayAccountBox(!displayAccountBox)}
          />
        </div>

        {/* Account Box */}
        {displayAccountBox && (
          <div
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-6 right-0 mx-4 my-4"
            onMouseLeave={() => {
              setDisplayAccountBox(false);
            }}
          >
              <div
                className="px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-slate-100 text-base"
                onClick={() => {
                  Account()
                }}
              >
                <MdAccountCircle   className="text-xl" />
                <p>Account</p>
              </div>


            <div
                    className="px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-slate-100 text-base"
                    onClick={() => {
                      orderHistory()
                    }}
                  >
                <MdOutlineHistory className="text-xl" />
                <p>Orders</p>
            </div>


            <div
                className="px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-slate-100 text-base"
                onClick={() => logOut()}
              >
                <MdLogout className="text-xl" />
                <p>Sign Out</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ClientHeader;
