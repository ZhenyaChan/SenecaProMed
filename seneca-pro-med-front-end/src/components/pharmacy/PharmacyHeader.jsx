import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.js";
import useRoleCheck from "../../useRoleCheck.js";

const PharmacyHeader = () => {
  useRoleCheck(["pharmacy"]);

  const [displayAccountBox, setDisplayAccountBox] = useState(false);
  const { logOut, userData } = useContext(AuthContext);
  const [searchFilter, setSearchFilter] = useState("all");

  const handleSearchFilter = (evt) => {
    const filter = evt.target.value;
    setSearchFilter(filter);
  };

  const handleSearch = () => {
    // TODO
  };

  return (
    <header className="flex justify-between items-center p-3 px-16 border-b-0.5 border-b-gray-300 bg-slate-100 gap-8">
      {/* Logo */}
      <Link to={"/"} className="link text-2xl flex justify-start">
        Seneca<span className="font-bold">ProMed</span>
      </Link>

      {/* Search Tool  */}
      <div className="flex flex-grow mx-20 gap-1 items-center">
        <select name="filter" id="filter" onChange={handleSearchFilter} className="input-field p-2">
          <option value="all">All</option>
          <option value="client">Client</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="driver">Driver</option>
        </select>

        <input
          type="text"
          className="input-field py-2 px-4 w-full"
          placeholder="Search for Medicine, Client, or Prescription"
        />

        <button className="btn py-2 px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Account Settings */}
      <div className="flex justify-end gap-8 items-center relative">
        {/* My Account */}
        <div className="flex flex-row items-center gap-4 font-bold">
          <p className="cursor-default">{userData.pharmacyName}</p>
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

export default PharmacyHeader;
