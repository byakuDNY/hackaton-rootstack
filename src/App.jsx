import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import Catalogo from "./pages/Catalogo";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
