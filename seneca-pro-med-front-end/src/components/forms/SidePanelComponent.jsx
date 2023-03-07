import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/SenecaProMed-Logo.svg";

const SidePanelComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <div className="SidePanelComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block rounded-lg shadow-lg w-[500px] max-w-md">
        <img src={logo} alt="" width="500px" className="mt-10 pt-20 pb-10 px-20" />

        {isLogin ? (
          <div>
            <p className="text-center pt-10 pb-5 text-black font-bold text-[16px]">Don't have an account yet?</p>

            <div className="w-full px-40">
              <button type="button" className="btn btn-secondary mb-10" onClick={() => navigate("/sign-up")}>
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center pt-10 pb-5 text-black font-bold text-[16px]">Already have an Account?</p>

            <div className="w-full px-40">
              <button type="button" className="btn btn-primary mb-10" onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanelComponent;
