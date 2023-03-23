import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/SenecaProMed-Logo.svg";
import AuthContext from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { isLoggedIn, errorMsg, login } = useContext(AuthContext);

  const [formData, setFormData] = useState({ role: "", username: "", password: "" });

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormData((currUser) => {
      return { ...currUser, [name]: value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formData);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">Login to SenecaProMed</h1>

      {/* Side panel */}
      <div className="flex items-center justify-center gap-1 p-6 my-8 border rounded-lg shadow-lg bg-white w-3/4">
        <div className="flex flex-col gap-8 items-center border-r px-10 py-20 w-1/2">
          <img src={logo} alt="Logo" width="1000px" className="w-full" />

          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg">Don't have an account yet?</h2>

            <Link to={"/signUp"} className="btn btn-secondary p-2">
              Sing Up
            </Link>
          </div>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4 items-center w-2/3 px-20 py-20" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <select
            name="role"
            id="role"
            onChange={handleChange}
            required
            defaultValue=""
            className="input-field w-full block px-3 py-2 text-base font-normal"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="driver">Delivery Driver</option>
          </select>

          {/* Username */}
          <input
            type="text"
            placeholder="Username/Email"
            name="username"
            onChange={handleChange}
            className="input-field w-full block px-3 py-1.5 text-base font-normal"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="input-field w-full block px-3 py-1.5 text-base font-normal"
            required
          />

          <p className="h-5 self-start text-red-500 font-bold">{errorMsg}</p>

          {/* Login and Forgot your password */}
          <div className="flex flex-col gap-4 my-2 w-full items-center">
            <Link to={"#"} className="link">
              <p className="">Forgot your password?</p>
            </Link>

            <button type="submit" className="btn btn-primary w-full p-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
