import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import ProductList from "./components/ProductList";
import MainComponent from "./components/MainComponent";
import ProductForm from "./components/pharmacy/ProductForm";


const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HeaderComponent />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/home" element={<MainComponent />} />
            {/* <Route path="/products" element={<ProductList />} /> */}
            <Route path="/addProduct" element={<ProductForm />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </AnimatePresence>
  );
};

export default App;
