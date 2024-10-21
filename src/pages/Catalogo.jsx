import React, { useEffect, useState } from 'react';
import ProductCard from '../components/product/ProductCard';

const Catalogo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/productos.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error obteniendo productos: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalogo;
