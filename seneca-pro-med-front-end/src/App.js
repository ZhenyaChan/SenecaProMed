import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import ProductList from "./components/ProductList";
import MainComponent from "./components/MainComponent";
import ProductForm from "./components/pharmacy/ProductForm";
import PharmacyList from "./components/pharmacy/PharmacyList";
import ListPharmacy from "./components/pharmacy/ListPharmacy";
import AddPharmacy from "./components/pharmacy/AddPharmacy";
import UpdatePharmacy from "./components/pharmacy/UpdatePharmacy";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HeaderComponent />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/home" element={<MainComponent />} />
            <Route path='/*' element = {<NotFoundPage/>}/>
            {/* <Route path="/products" element={<ProductList />} /> */}
            <Route path="/addProduct" element={<ProductForm />} />
            <Route path="/admin/pharmacies/all_pharmacies" element={<PharmacyList />} />
            <Route path="/admin/pharmacy/:id" element={<ListPharmacy />} />
            <Route path="/admin/pharmacy/signup" element={<AddPharmacy />} />
            <Route path="/admin/pharmacy/update_pharmacy/:id" element={<UpdatePharmacy />} />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </AnimatePresence>
  );
};

export default App;
