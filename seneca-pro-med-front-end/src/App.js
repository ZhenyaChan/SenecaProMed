import ProductsList from "./components/product/ProductList";

const App = ({ userRole }) => {
  // TODO: validate which user is authenticated and render component accordingly

  const componentToRender = (userRole) => {
    // TODO: add a switch statement here

    switch (userRole) {
      default:
        return <ProductsList />;
    }
  };

  return <div>{componentToRender(userRole)}</div>;
};

export default App;
