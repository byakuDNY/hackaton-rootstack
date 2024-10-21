import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/product/ProductSlider";
import PurchaseBanner from "../components/product/PurchaseBanner";
import ProductMapLocation from "../components/product/ProductMapLocation";

const fetchProductDetails = async (id) => {
  const response = await fetch('/productos.json');
  const data = await response.json();
  return data.find((product) => product.id === id);
};

const Product = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const product = await fetchProductDetails(parseInt(id));
        if (product) {
          setProductDetails(product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
