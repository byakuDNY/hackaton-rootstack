import React, { useState } from 'react';

const PurchaseBanner = ({ product }) => {

    const [cantidad, setCantidad] = useState(1);

    const handleCantidadChange = (e) => {
        const valor = Math.max(1, parseInt(e.target.value));
        setCantidad(valor);
    };

    const precio = product.price * cantidad;

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-2xl font-bold mb-4">
                US$ <span className="text-green-500">{precio.toFixed(2)}</span> x lb
            </p>
            <p className="text-gray-600 mb-4">
                Entrega el miércoles, 30 de octubre
            </p>
            <form className="flex flex-col gap-y-4 items-center">
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
                <button className="bg-yellow-500 text-green-900 rounded-lg px-4 py-2 hover:bg-yellow-400 transition duration-200">
                    Agregar al carrito
                </button>
            </form>
        </div>
    );
};

export default PurchaseBanner;
