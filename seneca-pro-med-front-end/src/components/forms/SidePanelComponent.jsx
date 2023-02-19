import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/SenecaProMed-Logo.svg";

const SidePanelComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="SidePanelComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block rounded-lg shadow-lg w-[500px] max-w-md">
        <img
          src={logo}
          alt=""
          width="500px"
          className=" mt-10 pt-20 pb-10 px-20"
        />

        <p className="text-center p-20 text-black font-bold text-[16px]">
          Already have an Account?
        </p>
        <div className="w-full px-40">
          <button
            type="button"
            className="w-full
                     px-6
                     py-2.5
                     bg-blue-600
                     text-white
                     font-medium
                     text-xs
                     leading-tight
                     uppercase
                     rounded
                     shadow-md
                     hover:bg-blue-700 hover:shadow-lg
                     focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                     active:bg-blue-800 active:shadow-lg
                     transition
                     duration-150
                     ease-in-out
                     mb-10"
                     
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanelComponent;
