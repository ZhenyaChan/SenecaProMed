import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import PharmacyUsers from "./components/pharmacy/PharmacyUsers";
import Pharmacy from "./components/pharmacy/Pharmacy";
import CreatePharmacy from "./components/pharmacy/CreatePharmacy";

const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h- auto flex flex-col bg-primary">
        <HeaderComponent />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainComponent />} />
            <Route path="/pharmacyUsers" element={<PharmacyUsers />} />
            <Route path="/pharmacy/:id" element={<Pharmacy />} />
            <Route path="/createPharmacy" element={<CreatePharmacy />} />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </AnimatePresence>
  );
};

export default App;
