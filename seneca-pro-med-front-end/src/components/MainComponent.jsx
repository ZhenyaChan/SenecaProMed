import React from "react";
import "./MainComponent.css";
import ProductList from "./product/ProductList";

const MainComponent = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <ProductList />
    </div>
  );
};

export default MainComponent;
