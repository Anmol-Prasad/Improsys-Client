import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Password from "./Password";
import Register from "./Register";
import Settings from "./Settings";
import Signin from "./Signin";
import CategoryDetail from "./CategoryDetail";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Pay from "./RazorpayButton";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/password" element={<Password />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
};

export default App;
