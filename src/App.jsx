import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Product from "./pages/product/Product";
import Home from "./pages/home/Home"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </Router>
  );
}
