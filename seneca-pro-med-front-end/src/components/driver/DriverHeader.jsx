import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.js";
import useRoleCheck from "../../useRoleCheck.js";

const DriverHeader = () => {
  useRoleCheck(["driver"]);

  const [displayAccountBox, setDisplayAccountBox] = useState(false);
  const { logOut } = useContext(AuthContext);

  const [status, setStatus] = useState("Offline");

  const handleStatus = () => {
    status === "Offline" ? setStatus("Online") : setStatus("Offline");
  };

  return (
    <header className="flex justify-between items-center p-3 px-16 border-b-0.5 border-b-gray-300 bg-slate-100 gap-8">
      {/* Logo */}
      <Link to={"/"} className="link text-2xl flex justify-start">
        Seneca<span className="font-bold">ProMed</span>
      </Link>

      {/* Banner  */}
      <div className="flex flex-grow mx-20 p-2 items-center justify-center border-r-2 border-l-2 bg-white border-gray-400">
        <Link to={"#"} className="hover:text-blue-600">
          <p className="">There are 5 available orders</p>
        </Link>
      </div>

      {/* Status */}
      <div className="bg-gray-200 p-2 rounded-lg">
        <label class="relative flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" onClick={handleStatus} />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span class="ml-3 font-bold peer-checked:text-green-600">{status}</span>
        </label>
      </div>

      {/* Account Settings */}
      <div className="flex justify-end gap-8 items-center relative">
        {/* My Account */}
        <div className="flex flex-row items-center gap-4 font-bold">
          <p className="cursor-default">My Account</p>
          <BiMenu
            className="text-[30px] cursor-pointer text-black"
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

export default DriverHeader;
