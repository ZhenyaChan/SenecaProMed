import React from "react";
import Logo from "../assets/images/SenecaProMed-Logo.svg";
import Avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdShoppingCart, MdNotificationsNone, MdLogout, MdLogin } from "react-icons/md";

// import { Fragment } from "react";
// import { Menu } from "@headlessui/react";

// const links = [
//   { href: "/login", label: "login" },
//   { href: "/signup", label: "Signup" },
//   { href: "/sign-out", label: "Sign out" },
// ];
// <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
// <Menu>
//   <Menu.Button>
//     {" "}
//     <MdOutlineMenu className="text-textColor text-2xl" />
//   </Menu.Button>
//   <Menu.Items>
//     {links.map((link) => (
/* Use the `active` state to conditionally style the active item. */
//         <Menu.Item key={link.href} as={Fragment}>
//           {({ active }) => (
//             <a
//               href={link.href}
//               className={`${
//                 active
//                   ? "bg-gray-500 text-white"
//                   : "bg-white text-black"
//               }`}
//             >
//               {link.label}
//             </a>
//           )}
//         </Menu.Item>
//       ))}
//     </Menu.Items>
//   </Menu>
// </li> */}

const HeaderComponent = () => {
  const login = async () => {};

  return (
    <header className="fixed z-50 w-screen p-3 px-16 border-b-0.5 border-b-textColor bg-primary">
      {/* PC and tablet */}
      <div className="hidden md:flex w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-20 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Seneca Pro Med</p>
        </Link>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            <MdNotificationsNone className="text-textColor text-2xl" />
          </li>

          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
              <Link to={"/"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  My Account
                </p>
              </Link>
              <Link to={"/"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  <MdLogin /> Sign in
                </p>
              </Link>
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                <MdLogout /> Sign out
              </p>
            </div>
          </div>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default HeaderComponent;
