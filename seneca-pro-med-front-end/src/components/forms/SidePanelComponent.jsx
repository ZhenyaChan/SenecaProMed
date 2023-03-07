import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/SenecaProMed-Logo.svg";

const SidePanelComponent = ({ path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <div className="SidePanelComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block rounded-lg shadow-lg w-[500px] max-w-md">
<<<<<<< Updated upstream
        <img
          src={logo}
          alt=""
          width="500px"
          className=" mt-10 pt-20 pb-10 px-20"
        />
        {path === "sign-up" ? (
          <div>
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
=======
        <img src={logo} alt="" width="500px" className="mt-10 pt-20 pb-10 px-20" />

        {isLogin ? (
          <div>
            <p className="text-center pt-10 pb-5 text-black font-bold text-[16px]">Don't have an account yet?</p>

            <div className="w-full px-40">
              <button type="button" className="btn btn-secondary mb-10" onClick={() => navigate("/sign-up")}>
                Sign Up
>>>>>>> Stashed changes
              </button>
            </div>
          </div>
        ) : (
          <div>
<<<<<<< Updated upstream
            <p className="text-center p-20 text-black font-bold text-[16px]">
              Don't have an account?
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
                  navigate("/sign-up");
                }}
              >
                Sign Up
=======
            <p className="text-center pt-10 pb-5 text-black font-bold text-[16px]">Already have an Account?</p>

            <div className="w-full px-40">
              <button type="button" className="btn btn-primary mb-10" onClick={() => navigate("/login")}>
                Login
>>>>>>> Stashed changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanelComponent;
