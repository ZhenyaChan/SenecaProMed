import LoginComponent from "../components/forms/LoginComponent";
import SidePanelComponent from "../components/forms/SidePanelComponent";

const LoginPage = () => {
  return (
    <div className="LoginPage flex justify-center">
      <SidePanelComponent />
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
