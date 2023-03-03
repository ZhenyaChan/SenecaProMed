import SidePanelComponent from "../components/forms/SidePanelComponent";
import LoginComponent from "../components/forms/LoginComponent";

const LoginPage = () => {
  return (
    <div className="LoginPage flex justify-center">
      <SidePanelComponent path="login" />
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
