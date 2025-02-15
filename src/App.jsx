import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LayOut from './Views/Layout'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Login from "./Views/Login";
import Register from "./Views/Register";
import CreateProduct from "./Views/CreateProduct";
import ProductDashboard from "./Views/ProductDashboard";
import ProductPage from "./Views/ProductPage";
import OrderPage from "./Views/OrdersPage";
import Cart from "./Views/Cart";
import PurchaseOrder from "./Views/PurchaseProductPage";
import PurchaseForm from "./Components/PurchaseForm";



function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product" element={<ProductDashboard />} />  
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase-order/:id" element={<PurchaseOrder />} />
        <Route path="/form" element={<PurchaseForm />} />

      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
