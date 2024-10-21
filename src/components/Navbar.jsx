import React from "react";

const navbar = () => {


  return (
    <nav className="backgroundColor: to-black text-white flex justify-between">
    
      <div className="nav-logo">
        <a href="/">Logo</a>
      </div>

      <div className="flex flex-row flex-nowrap items-center">
        <a href="/">Inicio</a>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
      </div>
    
    </nav>
  );

};

export default navbar;
