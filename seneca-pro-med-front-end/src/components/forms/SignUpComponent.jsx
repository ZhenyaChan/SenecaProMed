import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const [formDetails, setFormDetails] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setFormDetails({
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password1: "",
      phoneNumber: "",
      street: "",
      city: "",
      postalCode: "",
      province: "",
      country: "",
    });
  }, []);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    let value = target.value;

    setFormDetails((currUser) => {
      return { ...currUser, [name]: value };
    });
  };

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

    fetch(`${process.env.REACT_APP_BACKEND}/${roleUrlBase}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDetails),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create a new account");
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsSignedUp(true);
      })
      .catch((err) => {
        window.scrollTo(0, 0);
        console.error(err);
        setIsError(true);
      });
  };

  return (
    <div className="SignUpComponent pt-10 pb-10 flex justify-center my-2">
      {isSignedUp ? (
        <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <h1 className="text-xl font-bold px-2 py-2 text-center m-6 text-green-500">
            Thank you for registering!
          </h1>
          <h1 className="text-xl font-medium text-gray-900 px-2 py-2 text-center m-6">
            You can now log in with your new account.
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="
                        w-full
                        px-6
                        py-2.5
                        bg-gray-600
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
              Home
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
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
          {isError ? (
            <p className="text-xl font-bold text-red-500 px-2 py-2 text-center m-6 ">
              Failed to submit form
            </p>
          ) : (
            <h1 className="text-xl font-bold text-gray-900 px-2 py-2 text-center m-6">
              Create a New Account
            </h1>
          )}

          <form className="w-96" onSubmit={handleSubmit}>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              required
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
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="driver">Delivery Driver</option>
            </select>

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
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

            <div className="form-group mb-6">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
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

            <div className="form-group mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password1"
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

            <div className="form-group mb-6">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Street"
                name="street"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="City"
                name="city"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Province"
                name="province"
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

            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Country"
                name="country"
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpComponent;
