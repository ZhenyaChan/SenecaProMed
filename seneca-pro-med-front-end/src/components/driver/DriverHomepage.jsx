import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
const { BsFileEarmarkText, BsArchive } = require("react-icons/bs");

const DriverHomepage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">Hi, {userData.firstName}</h1>

      <div className="flex flex-row items-center justify-center gap-6 w-full py-10">
        <Link
          to={"/driver/available_orders"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsFileEarmarkText className="text-[60px]" />
          <h1 className="text-2xl font-semibold text-center">Available Orders</h1>
        </Link>

        <Link
          to={"/driver/delivered_orders"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsArchive className="text-[60px]" />
          <h1 className="text-2xl font-semibold ">Past Deliveries</h1>
        </Link>
      </div>
    </section>
  );
};

export default DriverHomepage;
