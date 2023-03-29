import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [formDetails, setFormDetails] = useState({ role: "" });
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

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

  const handleNewUser = () => {
    setFormDetails({ role: "" });
    setIsSignedUp(false);
    setIsError(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">Create a New Account</h1>

      {/* Side panel */}
      <div className="flex items-start justify-around p-6 my-8 border rounded-lg shadow-lg bg-white">
        {/* Login Form */}
        {isSignedUp ? (
          <div className="over block p-6 rounded-lg bg-white">
            <h1 className="text-xl font-bold px-2 py-2 text-center m-6 text-green-500">
              A new {formDetails.role} has been created
            </h1>
            <h1 className="text-xl font-medium text-gray-900 px-2 py-2 text-center m-6">{formDetails.email}</h1>
            <div className="grid grid-cols-2 gap-4 px-8">
              <button type="button" className="btn btn-secondary py-2 px-2" onClick={() => navigate("/")}>
                Home
              </button>
              <button type="submit" className="btn btn-primary py-2 px-2" onClick={handleNewUser}>
                New User
              </button>
            </div>
          </div>
        ) : (
          <div className="over block p-6 bg-white">
            {isError && (
              <p className="text-xl font-bold text-red-500 px-2 py-2 text-center m-6 ">Failed to submit form</p>
            )}

            <form className="w-96 flex flex-col justify-center gap-4 " onSubmit={handleSubmit}>
              <select
                name="role"
                id="role"
                onChange={handleChange}
                required
                className="input-field w-full block px-3 py-2 text-base font-normal"
              >
                <option value="">Select The Role</option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="driver">Delivery Driver</option>
              </select>
              {formDetails.role !== "" && (
                <div className="flex flex-col gap-4">
                  {formDetails.role === "pharmacy" ? (
                    <input
                      type="text"
                      placeholder="Pharmacy Name"
                      name="pharmacyName"
                      onChange={handleChange}
                      className="input-field w-full block px-3 py-1.5 text-base font-normal"
                      required
                    />
                  ) : (
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        className="input-field w-full block px-3 py-1.5 text-base font-normal"
                        required
                      />

                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        className="input-field w-full block px-3 py-1.5 text-base font-normal"
                        required
                      />
                    </div>
                  )}

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password1"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Street"
                    name="street"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    name="postalCode"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Province"
                    name="province"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                    className="input-field w-full block px-3 py-1.5 text-base font-normal"
                    required
                  />

                  {formDetails.role === "driver" && (
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="Vehicle Model"
                        name="vehicleModel"
                        onChange={handleChange}
                        className="input-field w-full block px-3 py-1.5 text-base font-normal"
                        required
                      />

                      <input
                        type="text"
                        placeholder="License Plate"
                        name="licensePlate"
                        onChange={handleChange}
                        className="input-field w-full block px-3 py-1.5 text-base font-normal"
                        required
                      />
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary my-2 p-2">
                    Create
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default AddUser;
