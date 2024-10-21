import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!inputs.username || !inputs.password || !inputs.confirmPassword) {
      toast.error("Por favor llena todos los campos");
      return;
    }

    if (inputs.password !== inputs.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (inputs.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-6xl text-center p-10 font-extrabold  font-outline-2">
          Registro
        </h1>
        <div className="flex justify-center items-center flex-col">
          <form onSubmit={handleSignUp} className="sm:w-1/3 p-4 mt-10">
            <div className="mb-6">
              <label
                className="block  font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="username"
              >
                Nombre de usuario
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="user-icon.svg"
                  alt="user-icon"
                  className="absolute w-5 h-5"
                />
                <input
                  id="username"
                  type="text"
                  placeholder="Escribe su nombre de Usuario"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none "
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block  font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="lock-icon.svg"
                  alt="user-icon"
                  className="absolute w-6 h-6"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Escribe su contraseña"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block  font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <div className="flex items-center text-gray-900 focus-within:text-gray-700">
                <img
                  src="lock-icon.svg"
                  alt="user-icon"
                  className="absolute w-6 h-6"
                />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Escribe su contraseña"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-amber-500 hover:bg-amber-600  text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white"
                type="submit"
              >
                CREAR CUENTA
              </button>
            </div>
          </form>
          <div className="pt-5">
            <Link
              className=" text-xl font-extrabold py-2 px-4 hover:text-gray-200 font-outline-2 focus:outline-white"
              to={"/login"}
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
