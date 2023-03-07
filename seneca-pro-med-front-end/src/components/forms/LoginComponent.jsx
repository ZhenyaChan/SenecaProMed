import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser, validateAuthorization } from "../../util/auth";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormData((currUser) => {
      return { ...currUser, [name]: value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setIsAuthenticated(
      await authenticateUser({
        username: formData.username,
        password: formData.password,
        role: formData.role,
      })
    );

    if (isAuthenticated) {
      console.log("user logged in");
    } else {
      console.log("failed to login");
    }
  };

  useEffect(() => {
    const token = validateAuthorization();

    if (token) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="LoginComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <h1 className="text-xl font-bold text-gray-900 px-2 py-2 text-center m-6">Login to SenecaProMed</h1>

        <form className="w-96" onSubmit={handleSubmit}>
          <select name="role" id="role" onChange={handleChange} required className="input-field mb-6">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="driver">Delivery Driver</option>
          </select>

          <input
            type="text"
            placeholder="Username/Email"
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
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
