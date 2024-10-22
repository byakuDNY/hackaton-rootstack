import { useState } from "react";
import { useAuthContext } from "../../AuthContext";
import toast from "react-hot-toast";
import { useCartDispatchContext } from "../../context/CartContext";


const PurchaseBanner = ({ product }) => {
  const dispatch = useCartDispatchContext();
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (e) => {
    const valor = Math.max(1, parseInt(e.target.value));
    setCantidad(valor);
  };

  const { authUser } = useAuthContext();

  const precio = product.price * cantidad;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!authUser) {
      toast.error("Debes iniciar sesión para agregar al carrito");
      return;
    }
    dispatch({
      type: "ADD_PRODUCT",
      producto: {
        name: product.name,
        quantity: cantidad,
        precio: precio,
        image: product.images[0],
      },
    });
    console.log("producto agregado: ", {
      name: product.name,
      quantity: cantidad,
      precio: precio,
      image: product.images[0],
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <p className="text-2xl font-bold mb-4">
        US$ <span className="text-green-500">{precio.toFixed(2)}</span> x lb
      </p>
      <p className="text-gray-600 mb-4">Entrega el miércoles, 30 de octubre</p>
      <div className="flex flex-col gap-y-4 items-center">
        <label htmlFor="cantidad" className="mr-2">
          Cantidad:
        </label>
        <input
          type="number"
          id="cantidad"
          className="border border-gray-300 rounded-lg p-2 mr-2 w-20"
          min="1"
          value={cantidad}
          onChange={handleCantidadChange}
        />
        <button
          className="bg-yellow-400 text-green-900 rounded-lg px-4 py-2 hover:bg-yellow-500 transition duration-200"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default PurchaseBanner;
