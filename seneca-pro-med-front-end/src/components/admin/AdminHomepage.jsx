import { Link } from "react-router-dom";
const { BsPeople, BsCarFront, BsShopWindow, BsPersonPlus } = require("react-icons/bs");

const AdminHomepage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">Home</h1>

      <div className="flex flex-row items-center justify-between gap-6 w-full">
        <Link
          to={"/admin/drivers/all_drivers"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsCarFront className="text-[60px]" />
          <h1 className="text-2xl font-semibold">Delivery Drivers</h1>
        </Link>

        <Link
          to={"/admin/clients/all_clients"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsPeople className="text-[60px]" />
          <h1 className="text-2xl font-semibold ">Clients</h1>
        </Link>

        <Link
          to={"/admin/pharmacies/all_pharmacies"}
          className="border rounded-lg border-1 border-slate-900 shadow flex flex-col items-center justify-center bg-slate-100 hover:bg-blue-100 p-8 w-1/3 gap-4 hover:cursor-pointer"
        >
          <BsShopWindow className="text-[60px]" />
          <h1 className="text-2xl font-semibold">Pharmacies</h1>
        </Link>
      </div>

      <Link
        to={"/admin/user/signup"}
        className="border rounded-lg border-1 border-slate-900 shadow w-1/2 flex flex-col items-center justify-center bg-gray-100 hover:bg-blue-100 gap-4 hover:cursor-pointer py-4"
      >
        <BsPersonPlus className="text-[60px]" />
        <h1>Add New User</h1>
      </Link>
    </section>
  );
};

export default AdminHomepage;
