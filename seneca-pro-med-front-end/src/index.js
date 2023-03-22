import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Product Components
import ProductDetails from "./components/product/ProductDetails";
import AddProduct from "./components/product/AddProduct";
import ListProduct from "./components/product/ListProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import ManageProduct from "./components/product/ManageProduct";

// Pharmacy Components
import AddPharmacy from "./components/pharmacy/AddPharmacy";
import ListPharmacy from "./components/pharmacy/ListPharmacy";
import PharmacyList from "./components/pharmacy/PharmacyList";
import UpdatePharmacy from "./components/pharmacy/UpdatePharmacy";

// Driver Components
import AddDriver from "./components/driver/AddDriver";
import DriverList from "./components/driver/DriverList";
import ListDriver from "./components/driver/ListDriver";
import UpdateDriver from "./components/driver/UpdateDriver";

// Client Components
import AddClient from "./components/client/AddClient";
import ClientList from "./components/client/ClientList";
import ListClient from "./components/client/ListClient";
import UpdateClient from "./components/client/UpdateClient";

// Others
import App from "./App";
import Header from "./components/others/Header";
import Footer from "./components/others/Footer";
import NotFound from "./components/others/NotFound";

// Providers
import CartProvider from "./providers/CartProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CartProvider>
      <div className="w-screen flex flex-col min-h-screen">
        <Header />
        <main className="my-8 w-3/4 flex flex-col mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<App />} />

            {/* Login and Sign out */}

            {/* Client */}
            <Route path="/admin/client/signup" element={<AddClient />} />
            <Route path="/admin/clients/all_clients" element={<ClientList />} />
            <Route path="/admin/client/:id" element={<ListClient />} />
            <Route path="/admin/client/update_client/:id" element={<UpdateClient />} />

            {/* Product */}
            <Route path="/products/product/:id" element={<ProductDetails />} />
            <Route path="/products/addProduct" element={<AddProduct />} />
            <Route path="/pharmacy/products/product/:id" element={<ListProduct />} />
            <Route path="/pharmacy/products/all_products" element={<ManageProduct />} />
            <Route path="/pharmacy/product/update_product/:id" element={<UpdateProduct />} />

            {/* Pharmacy */}
            <Route path="/admin/pharmacy/signup" element={<AddPharmacy />} />
            <Route path="/admin/pharmacy/:id" element={<ListPharmacy />} />
            <Route path="/admin/pharmacies/all_pharmacies" element={<PharmacyList />} />
            <Route path="/admin/pharmacy/update_pharmacy/:id" element={<UpdatePharmacy />} />

            {/* Driver */}
            <Route path="/admin/driver/signup" element={<AddDriver />} />
            <Route path="/admin/drivers/all_drivers" element={<DriverList />} />
            <Route path="/admin/driver/:id" element={<ListDriver />} />
            <Route path="/admin/driver/update_driver/:id" element={<UpdateDriver />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  </BrowserRouter>
);
