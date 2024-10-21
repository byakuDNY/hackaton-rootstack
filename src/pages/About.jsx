import React from 'react'
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className='bg-lime-300'>
      <div><Navbar /></div>
      
      <div className='text-black flex justify-evenly my-10'>
        <div className='border-4 border-lime-600 rounded-xl flex items-center flex-col bg-lime-400'>
          <img className='m-2' src="" alt="Foto de perfil" />
          <h1 className='text-2xl m-2'>Roberto Luo</h1>
          <div><p className='text-lg m-2'>
            Edad: 21<br />
            Numero telefonico: 6520-0235<br />
            Correo electronico: <br />
            Cualidades: <br />
            Conocimientos: <br />

          </p></div>
        </div>
        <div className='border-4 border-lime-600 rounded-xl flex items-center flex-col bg-lime-400'>
          <img className='m-2' src="" alt="Foto de perfil" />
          <h1 className='text-2xl m-2'>Enrique Wen</h1>
          <div><p className='text-lg m-2'>
            Edad: 21<br />
            Numero telefonico: 6740-5585<br />
            Correo electronico: <br />
            Cualidades: <br />
            Conocimientos: <br />

          </p></div>
        </div>
        <div className='border-4 border-lime-600 rounded-xl flex items-center flex-col bg-lime-400'>
          <img className='m-2' src="" alt="Foto de perfil" />
          <h1 className='text-2xl m-2'>Carlos Avilés</h1>
          <div><p className='text-lg m-2'>
            Edad: 20<br />
            Numero telefonico: 6549-8261<br />
            Correo electronico: carlosavilesia@gmal.com<br />
            Cualidades: <br />
            Conocimientos: <br />

          </p></div>
        </div>
      </div>

    </div>
    

  )
}

export default About