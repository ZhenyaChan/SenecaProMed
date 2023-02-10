import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import ProductComponent from "./components/Product";


const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HeaderComponent />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <ProductComponent title="Product 1" description="Blah blah" price="25"/>
          <ProductComponent title="Product 2" description="Blah blah" price="25"/>
          <ProductComponent title="Product 3" description="Blah blah" price="25"/>
          <ProductComponent title="Product 4" description="Blah blah" price="25"/>
          <ProductComponent title="Product 5" description="Blah blah" price="25"/>

          <Routes>
            <Route path="/*" element={<MainComponent />} />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </AnimatePresence>
  );
};

export default App;
