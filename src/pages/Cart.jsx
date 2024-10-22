import React from 'react';
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { productos } = useCartContext();
  console.log("productos:", productos);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <p>Si Hay productos</p>
      )}
    </div>
  );
};

export default Cart;
