import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// import ProductList from "./components/ProductList";
import MainComponent from "./components/MainComponent";

// admin/Pharmacy
import ProductForm from "./components/pharmacy/ProductForm";
import PharmacyList from "./components/pharmacy/PharmacyList";
import ListPharmacy from "./components/pharmacy/ListPharmacy";
import AddPharmacy from "./components/pharmacy/AddPharmacy";
import UpdatePharmacy from "./components/pharmacy/UpdatePharmacy";

// admin/Driver
import DriverList from "./components/driver/DriverList";
import ListDriver from "./components/driver/ListDriver";
import UpdateDriver from "./components/driver/UpdateDriver";
import AddDriver from "./components/driver/AddDriver"

// admin/Client
import ClientList from "./components/client/ClientList";
import ListClient from "./components/client/ListClient";
import UpdateClient from "./components/client/UpdateClient";
import AddClient from "./components/client/AddClient";

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

            {/* ADMIN/PHARMACY ROUTE*/}
            <Route path="/addProduct" element={<ProductForm />} />
            <Route path="/admin/pharmacies/all_pharmacies" element={<PharmacyList />} />
            <Route path="/admin/pharmacy/:id" element={<ListPharmacy />} />
            <Route path="/admin/pharmacy/signup" element={<AddPharmacy />} />
            <Route path="/admin/pharmacy/update_pharmacy/:id" element={<UpdatePharmacy />} />

            {/* ADMIN/DRIVER ROUTE*/}
            <Route path="/admin/drivers/all_drivers" element={<DriverList />} />
            <Route path="/admin/driver/:id" element={<ListDriver />} />
            <Route path="/admin/driver/update_driver/:id" element={<UpdateDriver />} />
            <Route path="/admin/driver/signup" element={<AddDriver />} />

            {/* ADMIN/CLIENT ROUTE*/}
            <Route path="/admin/clients/all_clients" element={<ClientList />} />
            <Route path="/admin/client/:id" element={<ListClient />} />
            <Route path="/admin/client/update_client/:id" element={<UpdateClient />} />
            <Route path="/admin/client/signup" element={<AddClient />} />

          </Routes>
        </main>

        <FooterComponent />
      </div>
    </AnimatePresence>
  );
};

export default App;
