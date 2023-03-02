import SignUpComponent from "../components/forms/SignUpComponent";
import SidePanelComponent from "../components/forms/SidePanelComponent";

const SignUpPage = () => {
  return (
    <div className="SingUpPage flex justify-center">
      <SidePanelComponent />
      <SignUpComponent />
    </div>
  );
};

export default SignUpPage;