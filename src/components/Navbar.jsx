import React from "react";

const navbar = () => {


  return (
    <nav className="bg-black text-white flex justify-between">
    
      <div className="nav-logo flex flex-row flex-nowrap items-center m-3 ml-5" >
        <a href="/">Logo</a>
      </div>

      <div className="flex flex-row flex-nowrap items-center mr-10">
        <a className="my-2 mx-2 bg-sky-700 px-3 py-1 rounded-md" href="/">Inicio</a>
        <a className="my-2 mx-2 bg-sky-700 px-3 py-1 rounded-md" href="/about">Nosotros</a>
        <a className="my-2 mx-2 bg-sky-700 px-3 py-1 rounded-md" href="/contact">Contacto</a>
      </div>
    
    </nav>
  );

};

export default navbar;
