import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//admin
import AddAdmin from "./components/admin/AddAdmin";
import AdminList from "./components/admin/AdminList";
import ListAdmin from "./components/admin/ListAdmin";
import UpdateAdmin from "./components/admin/UpdateAdmin";
import AdminOrder from "./components/admin/AdminOrders";
import OrderDetail from "./components/admin/AdminOrderDetail";
import AdminOrderProducts from "./components/admin/AdminOrderProducts";

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
import PharmacyListLocation from "./components/pharmacy/PharmacyListLocation";
import PharmacyLocation from "./components/pharmacy/PharmacyLocation";
import PharmacyOrders from "./components/pharmacy/PharmacyOrders";
import PharmacyOrderDetail from "./components/pharmacy/PharmacyOrderDetail";
import PharmacyProductsDetail from "./components/pharmacy/PharmacyProductsDetail";
import PharmacyPendingOrders from "./components/pharmacy/PharmacyPendingOrders";

// Driver Components
import AddDriver from "./components/driver/AddDriver";
import DriverList from "./components/driver/DriverList";
import ListDriver from "./components/driver/ListDriver";
import UpdateDriver from "./components/driver/UpdateDriver";
import DriverOrders from "./components/driver/DriverOrders";
import DriverOrderDetail from "./components/driver/DriverOrderDetail";

// Client Components
import AddClient from "./components/client/AddClient";
import ClientList from "./components/client/ClientList";
import ListClient from "./components/client/ListClient";
import UpdateClient from "./components/client/UpdateClient";
import ClientOrders from "./components/client/ClientOrders";

// Others
import App from "./App";
import Header from "./components/others/Header";
import Footer from "./components/others/Footer";
import NotFound from "./components/others/NotFound";
import Login from "./components/others/Login";
import SignUp from "./components/others/SignUp";
import About from "./components/others/About";

// Providers
import CartProvider from "./providers/CartProvider";
import AuthProvider from "./providers/AuthProvider";
import Map from "./components/map/Map";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <div className="w-screen flex flex-col min-h-screen">
          <Header />
          <main className="my-8 w-3/4 flex flex-col mx-auto flex-grow">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />

              {/* Login and Sign Up */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Admin */}
              <Route path="/admin/signup" element={<AddAdmin />} />
              <Route path="/admin/all/admins" element={<AdminList />} />
              <Route path="/admin/:id" element={<ListAdmin />} />
              <Route path="/admin/update_admin/:id" element={<UpdateAdmin />} />

              {/* Client */}
              <Route path="/admin/client/signup" element={<AddClient />} />
              <Route path="/admin/clients/all_clients" element={<ClientList />} />
              <Route path="/admin/client/:id" element={<ListClient />} />
              <Route path="/admin/client/update_client/:id" element={<UpdateClient />} />
              <Route path="/client/:id" element={<ListClient />} />
              <Route path="/client/update_client/:id" element={<UpdateClient />} />

              {/* Product */}
              <Route path="/products/product/:id" element={<ProductDetails />} />
              <Route path="/products/addProduct" element={<AddProduct />} />
              <Route path="/pharmacy/products/product/:id" element={<ListProduct />} />
              <Route path="/pharmacy/products/all_products" element={<ManageProduct />} />
              <Route path="/pharmacy/product/update_product/:id" element={<UpdateProduct />} />

              {/* Pharmacy */}
              <Route path="/admin/pharmacy/signup" element={<AddPharmacy />} />
              <Route path="/admin/pharmacy/:id" element={<ListPharmacy />} />
              <Route path="/admin/pharmacy/all_pharmacies" element={<PharmacyList />} />
              <Route path="/admin/pharmacy/update_pharmacy/:id" element={<UpdatePharmacy />} />
              <Route path="/pharmacy/all_pharmacies" element={<PharmacyListLocation />} />
              <Route path="/pharmacy/location/:id" element={<PharmacyLocation />} />

              {/* Driver */}
              <Route path="/admin/driver/signup" element={<AddDriver />} />
              <Route path="/admin/drivers/all_drivers" element={<DriverList />} />
              <Route path="/admin/driver/:id" element={<ListDriver />} />
              <Route path="/admin/driver/update_driver/:id" element={<UpdateDriver />} />

              {/* Orders */}
              <Route path="/admin/orders" element={<AdminOrder />} />
              <Route path="/admin/order_detail/:id" element={<OrderDetail />} />
              <Route path="/admin/order_products/:id" element={<AdminOrderProducts />} />

              <Route path="/driver/orders" element={<DriverOrders />} />
              <Route path="/driver/order_detail/:id" element={<DriverOrderDetail />} />

              <Route path="/pharmacy/orders" element={<PharmacyOrders />} />
              <Route path="/pharmacy/order_detail/:id" element={<PharmacyOrderDetail />} />
              <Route path="/pharmacy/products_detail" element={<PharmacyProductsDetail />} />
              <Route path="/pharmacy/orders/pending_orders" element={<PharmacyPendingOrders />} />

              <Route path="/client/orders/:clientId" element={<ClientOrders />} />

              {/* Map for Pharmacy locations */}
              <Route path="/pharmacy/locations" element={<Map />} />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
