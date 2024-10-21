import React from 'react';

const ProductMapLocation = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d825.2674364502927!2d-82.2872883887695!3d8.382619378693544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2spa!4v1729495545745!5m2!1sen!2spa" 
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
