import { useContext } from "react";
import AdminHomepage from "./components/admin/AdminHomepage";
import ClientHomepage from "./components/client/ClientHomepage";
import DriverHomepage from "./components/driver/DriverHomepage";
import PharmacyHomepage from "./components/pharmacy/PharmacyHomepage";
import ProductsList from "./components/product/ProductList";
import AuthContext from "./contexts/AuthContext";

const App = () => {
  const { userData } = useContext(AuthContext);

  const componentToRender = (userRole) => {
    switch (userRole) {
      case "admin":
        return <AdminHomepage />;
      case "client":
        return <ClientHomepage />;
      case "pharmacy":
        return <PharmacyHomepage />;
      case "driver":
        return <DriverHomepage />;
      default:
        return <ProductsList />;
    }
  };

  return <div>{componentToRender(userData.role)}</div>;
};

export default App;
