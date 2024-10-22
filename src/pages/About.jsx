import React from 'react';
import Navbar from "../components/Navbar";
import Integrante from '../components/Integrante';

const About = () => {
  const integrantes = [
    {
      name: "Enrique Wen",
      image: "/images/enrique.jpg",
      linkedin: "https://www.linkedin.com/in/enrique-wen-chen-b7a023222/",
      github: "https://github.com/Orzy895"
    },
    {
      name: "Roberto Luo",
      image: "/images/roberto.jpg",
      linkedin: "https://www.linkedin.com/in/roberto-luo-1314a7215/",
      github: "https://github.com/byakuDNY"
    },
    {
      name: "Carlos Avilés",
      image: "/images/carlos.jpg",
      linkedin: "",
      github: "https://github.com/Sayo-420"
    }
  ];

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="relative flex justify-center items-center p-10 w-full text-5xl text-white font-bold h-[300px] bg-[url('/images/bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <span className="relative z-10">Grupo NULL</span>
        </h1>
      </div>
      <div className='p-10 pt-12 text-center gap-y-5 flex flex-col'>
        <h1 className='text-center text-xl'>Somos un grupo de estudiantes de Desarrollo de Software con una pasión por el desarrollo web</h1>
        <p className='text-lg'>Conoce el equipo detrás del grupo NULL</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {integrantes.map((integrante, index) => (
            <Integrante 
              key={index} 
              Integrante={integrante} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
