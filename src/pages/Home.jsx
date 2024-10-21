import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import ProductCard from '../components/product/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('/productos.json');
      const data = await response.json();
      const productosUnicos = (arr, num) => {
        const seleccionado = new Set();
        while (seleccionado.size < num && seleccionado.size < arr.length) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          seleccionado.add(arr[randomIndex]);
        }
        return Array.from(selected);
      };
      const productosAleatorio = data.sort(() => 0.5 - Math.random()).slice(0, 5);
      setProducts(productosAleatorio);
    } catch (error) {
      console.error('Error obteniendo productos: ', error);
    }
  };

  fetchProducts();
}, []);


  return (
    <div>
      <Navbar />
      <main>
        <h1>Home</h1>
        <div>

        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center p-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

    </div>
  );
};

export default Home;
