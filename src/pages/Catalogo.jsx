import React, { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const Catalogo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        toast.error("Error obteniendo productos: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="relative flex justify-center items-center p-10 w-full text-5xl text-white font-bold h-[300px] bg-[url('/images/bg2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <span className="relative z-10">Catálogo</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center p-4 pt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
