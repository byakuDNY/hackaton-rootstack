import React from "react";
import ProductSlider from "../../components/product/ProductSlider";
const Product = () => {
  const images = [
    "/images/papaya1.jpeg",
    "/images/papaya2.webp",
    "/images/papaya3.jpg",
    "/images/papaya4.jpeg"
  ]
  return (
    <div>
      <div className="">
        <p>hola</p>
        <ProductSlider images={images}/>
      </div>
    </div>
  )
};

export default Product;
