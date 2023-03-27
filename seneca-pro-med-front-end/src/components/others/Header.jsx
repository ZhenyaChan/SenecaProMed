import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import AdminHeader from "../admin/AdminHeader";
import ClientHeader from "../client/ClientHeader";
import PharmacyHeader from "../pharmacy/PharmacyHeader";
import DriverHeader from "../driver/DriverHeader";
import PublicHeader from "./PublicHeader";

const Header = () => {
  const { userData } = useContext(AuthContext);

  const headerToRender = (userRole) => {
    switch (userRole) {
      case "admin":
        return <AdminHeader />;
      case "client":
        return <ClientHeader />;
      case "pharmacy":
        return <PharmacyHeader />;
      case "driver":
        return <DriverHeader />;
      default:
        return <PublicHeader />;
    }
  };

  return <div>{headerToRender(userData.role)}</div>;
};

export default Header;
