import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import ProductList from "./components/ProductList";


const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fakeDB = [
      {
        _id: 1201201,
        title: "Sleeping Pills",
        description: "Very nice dreams, promised",
        price: 89.99,
        photo: "photourl",
      },
      {
        _id: 192192,
        title: "Energy Injection",
        description: "don't overdose, can be dangerous",
        price: 209.99,
        photo: "photourl",
      },
      {
        _id: 238537,
        title: "Rest Head",
        description:
          "Relax your head, have these pills, no more than three times a day",
        price: 69.99,
        photo: "photourl",
      },
      {
        _id: 802911,
        title: "Pain Gone",
        description: "Pills for stomachache, have with food",
        price: 81.99,
        photo: "photourl",
      },
      {
        _id: 999912,
        title: "Snoop Nose",
        description: "Use nose spray twice a day after food",
        price: 39.99,
        photo: "photourl",
      },
    ];

    setProducts(fakeDB);
  }, []);



  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HeaderComponent />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <ProductList products={products} />

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
