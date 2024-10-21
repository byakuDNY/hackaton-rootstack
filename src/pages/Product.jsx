import React from "react";
import ProductSlider from "../components/product/ProductSlider";
import PurchaseBanner from "../components/product/PurchaseBanner";
const Product = () => {
  const images = [
    "/images/papaya1.jpeg",
    "/images/papaya2.webp",
    "/images/papaya3.jpg",
    "/images/papaya4.jpeg"
  ]
  return (
    <div>
      <div className="flex justify-between">
        <ProductSlider images={images}/>
        <div>
          <h1>Papaya </h1>
        </div>
        <PurchaseBanner/>
      </div>
    </div>
  )
};

export default Product;
