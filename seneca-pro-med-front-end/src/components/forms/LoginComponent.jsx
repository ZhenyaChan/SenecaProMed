const LoginComponent = () => {
  const handleChange = () => {
    console.log("handleChange clicked");
  };
  
  const handleSubmit = () => {
    console.log("handleChange clicked");
  };

  return (
    <div className="LoginComponent pt-10 pb-10 flex justify-center my-2">
      <div className="over block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <h1 className="text-xl font-bold text-gray-900 px-2 py-2 text-center m-6">
          Login to SenecaProMed
        </h1>
        <form className="w-96" onSubmit={handleSubmit}>
          <select
            name="role"
            id="role"
            onChange={handleChange}
            required
            className="input-field mb-6"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="client">Client</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="driver">Delivery Driver</option>
          </select>

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
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
