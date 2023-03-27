import ProductsList from "./components/product/ProductList";
import AdminDashboard  from "./components/admin/AdminHome"
import AuthContext from './contexts/AuthContext';
import { useContext } from 'react';

const App = ({ userRole }) => {
  // TODO: validate which user is authenticated and render component accordingly
  const { userData } = useContext(AuthContext);
  const componentToRender = (userRole) => {
    // TODO: add a switch statement here
    
    switch (userData.role) {
      case 'admin':
        return <AdminDashboard/>;
      case 'client':
        return <ProductsList/>;
      case 'pharmacist':
        return <ProductsList/>; //update later pharmacis dashboard
      case 'driver':
        return <ProductsList/>; //update later for driver dashboard

      default:
        return <ProductsList />;
    }
  };

  return <div>{componentToRender(userRole)}</div>;
};

export default App;
