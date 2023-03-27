import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
const { BsPeople, BsFileEarmarkText, BsFileBarGraph, BsChatLeftText, BsBoxSeam } = require("react-icons/bs");

const PharmacyHomepage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">{userData.pharmacyName}</h1>

      <div className="flex flex-row items-center justify-between w-3/4 gap-6 w-full">
        <Link
          to={"#"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsFileEarmarkText className="text-[60px]" />
          <h1 className="text-2xl font-semibold text-center">Pending Orders</h1>
        </Link>

        <Link
          to={"#"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsFileBarGraph className="text-[60px]" />
          <h1 className="text-2xl font-semibold ">Orders Status</h1>
        </Link>

        <Link
          to={"#"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsChatLeftText className="text-[60px]" />
          <h1 className="text-2xl font-semibold">Messages</h1>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center w-3/4 gap-6 w-full">
        <Link
          to={"#"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsPeople className="text-[60px]" />
          <h1 className="text-2xl font-semibold">Clients</h1>
        </Link>

        <Link
          to={"#"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsBoxSeam className="text-[60px]" />
          <h1 className="text-2xl font-semibold ">Inventory</h1>
        </Link>
      </div>
    </section>
  );
};
export default PharmacyHomepage;
