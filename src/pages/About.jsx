import React from 'react'
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className='bg-lime-300'>
      <div><Navbar /></div>
      
      <div className='text-black flex justify-evenly my-10'>
        <div>
          <img src="" alt="Foto de perfil" />
          <h1 className='text-2xl'>Roberto Luo</h1>
          <p className='text-lg'>
            Edad: 21<br />
            Numero telefonico: 6520-0235<br />
            Correo electronico: <br />
            Cualidades: <br />
            Conocimientos: <br />

          </p>
        </div>
        <div>
          <img src="" alt="Foto de perfil" />
          <h1 className='text-2xl'>Enrique Wen</h1>
          <p className='text-lg'>
            Edad: 21<br />
            Numero telefonico: 6740-5585<br />
            Correo electronico: <br />
            Cualidades: <br />
            Conocimientos: <br />

          </p>
        </div>
        <div>
          <img src="" alt="Foto de perfil" />
          <h1 className='text-2xl'>Carlos Avilés</h1>
          <p className='text-lg'>
            Edad: 20<br />
            Numero telefonico: 6549-8261<br />
            Correo electronico: carlosavilesia@gmal.com<br />
            Cualidades: <br />
            Conocimientos: <br />

          </p>
        </div>
      </div>

    </div>
    

  )
}

export default About