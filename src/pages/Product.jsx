import React from "react";
import ProductSlider from "../components/product/ProductSlider";
import PurchaseBanner from "../components/product/PurchaseBanner";
import ProductMapLocation from "../components/product/ProductMapLocation";

const Product = () => {
  const productDetails = {
    "id": 2,
        "name": "Tomate",
        "price": 2.50,
        "images": [
            "/images/tomate1.webp",
            "/images/tomate2.webp",
            "/images/tomate3.jpg"
        ],
        "farmer": "María González",
        "farm": "Huertos Verdes",
        "harvestDate": "2024-01-10",
        "status": "Cosechado",
        "contact": "9876-5432",
        "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.1731015385491!2d-80.83136980578566!3d8.290270155010546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae79e1c504b0ab%3A0xb839b116a96d0404!2sFinca%20Buenaventura!5e1!3m2!1sen!2spa!4v1729499041094!5m2!1sen!2spa"
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col max-w-[95%] w-full gap-y-6 p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <ProductSlider images={productDetails.images} />
          </div>
          <div className="w-full md:w-1/3 p-6">
            <h3 className="text-3xl font-bold mb-2">{productDetails.name}</h3>
            <p className="text-gray-700 mb-1">Agricultor: <span className="font-semibold">{productDetails.farmer}</span></p>
            <p className="text-gray-700 mb-1">Finca: <span className="font-semibold">{productDetails.farm}</span></p>
            <p className="text-gray-700 mb-1">Fecha de cosecha: <span className="font-semibold">{productDetails.harvestDate}</span></p>
            <p className="text-gray-700 mb-1">Estado: <span className="font-semibold">{productDetails.status}</span></p>
            <p className="text-gray-700 mb-4">Contacto: <span className="font-semibold">{productDetails.contact}</span></p>
          </div>
          <PurchaseBanner product={{ ...productDetails }} />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[80%]">
            <ProductMapLocation location={productDetails.location} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
