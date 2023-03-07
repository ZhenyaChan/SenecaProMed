import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
<<<<<<< Updated upstream
  const navigate = useNavigate();

  const [formDetails, setFormDetails] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  // set form default value when component is rendered
  useEffect(() => {
    setFormDetails({
      role: "",
      userName: "",
      password: "",
    });
  }, []);

  // handles user input and updates form details
  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setFormDetails((currUser) => {
      return { ...currUser, [name]: value };
    });
  };

  // handles login request
  const handleSubmit = (evt) => {
    evt.preventDefault();

    let roleUrlBase;

    switch (formDetails.role) {
      case "admin":
        roleUrlBase = "admin";
        break;
      case "client":
        roleUrlBase = "client";
        break;
      case "pharmacy":
        roleUrlBase = "pharma";
        break;
      case "driver":
        roleUrlBase = "driver";
        break;
      default:
        break;
    }

    console.log("formDetails.role", formDetails.role);
    console.log("roleUrlBase", roleUrlBase);

    // TODO: build backend path
    fetch(`${process.env.REACT_APP_BACKEND}/${roleUrlBase}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDetails),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("username/password is not valid");
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        window.scroll(0, 0);
        console.error(err);
        setIsError(true);
      });
=======
  const handleChange = () => {
    console.log("handleChange clicked");
  };
  
  const handleSubmit = () => {
    console.log("handleChange clicked");
>>>>>>> Stashed changes
  };

  return (
    <div className="LoginComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
<<<<<<< Updated upstream
        {isError ? (
          <p className="text-xl font-bold text-red-500 px-2 py-2 text-center m-6 ">
            Failed to submit form
          </p>
        ) : (
          <h1 className="text-xl font-bold text-gray-900 px-2 py-2 text-center m-6">
            Login to Your Account
          </h1>
        )}

        <form className="w-96" onSubmit={handleSubmit}>
          {/* Role */}
=======
        <h1 className="text-xl font-bold text-gray-900 px-2 py-2 text-center m-6">
          Login to SenecaProMed
        </h1>
        <form className="w-96" onSubmit={handleSubmit}>
>>>>>>> Stashed changes
          <select
            name="role"
            id="role"
            onChange={handleChange}
            required
<<<<<<< Updated upstream
            className="form-group mb-6 form-control block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
=======
            className="input-field mb-6"
>>>>>>> Stashed changes
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="driver">Delivery Driver</option>
          </select>

<<<<<<< Updated upstream
          {/* Username */}
          <div className="form-group mb-6">
            <input
              type="email"
              placeholder="Username"
              name="userName"
              onChange={handleChange}
              className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group mb-6">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="
                        w-full
                        px-6
                        py-2.5
                        bg-red-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-red-700 hover:shadow-lg
                        focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-red-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="
                        w-full
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
                        ease-in-out"
            >
              Login
            </button>
          </div>
=======
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="input-field"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="input-field"
            required
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
>>>>>>> Stashed changes
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
