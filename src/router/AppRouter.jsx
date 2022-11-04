import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Authentication from "../pages/Authentication";
import MainPage from "../pages/MainPage";
import ProductList from "../pages/ProductList";
import UserPage from "../pages/UserPage";
import { CartProvider } from "react-use-cart";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/products" element={<UserPage />}></Route>
          <Route path="/list" element={<ProductList />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
