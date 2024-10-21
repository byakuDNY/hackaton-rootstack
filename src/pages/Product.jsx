import React from "react";
import ProductSlider from "../components/product/ProductSlider";
import PurchaseBanner from "../components/product/PurchaseBanner";
import ProductMapLocation from "../components/product/ProductMapLocation";

const Product = () => {
  const product = {
    name: "Papaya",
    price: 17.99,
    images: [
      "/images/papaya1.jpeg",
      "/images/papaya2.webp",
      "/images/papaya3.jpg",
      "/images/papaya4.jpeg",
    ],
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col max-w-[95%] w-full gap-y-6 p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <ProductSlider images={product.images} />
          </div>
          <div className="w-full md:w-1/3 p-6">
            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-1">Agricultor: <span className="font-semibold">Juan Perez</span></p>
            <p className="text-gray-700 mb-1">Finca: <span className="font-semibold">San Pablo Segundo</span></p>
            <p className="text-gray-700 mb-1">Fecha de cosecha: <span className="font-semibold">01-11-2024</span></p>
            <p className="text-gray-700 mb-4">Estado: <span className="font-semibold">Sembrado</span></p>
          </div>
          <PurchaseBanner product={product} />
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <ProductMapLocation className="" />
        </div>
      </div>
    </div>
  );
};

export default Product;
