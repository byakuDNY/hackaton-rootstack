const ProductMapLocation = ({ location }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      {" "}
      <iframe
        src={location}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Product Location Map"
      ></iframe>
    </div>
  );
};

export default ProductMapLocation;
