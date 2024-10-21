import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
