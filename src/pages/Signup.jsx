import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../AuthContext";
import BgImage from "../components/BgImage";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { setUserAccounts } = useAuthContext();

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

    toast.success("Usuario registrado exitosamente");
    setInputs({ username: "", password: "", confirmPassword: "" });
    setUserAccounts((prevAccounts) => [
      ...prevAccounts,
      { username: inputs.username, password: inputs.password },
    ]);

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BgImage bgImage={"/signup-bg.jpg"} />
      <div className="w-full max-w-md bg-yellow-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-8 text-green-900">
          Registro
        </h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label
              className="block text-lg font-bold mb-2 text-green-800"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <div className="relative">
              <img
                src="user-icon.svg"
                alt="user-icon"
                className="absolute w-5 h-5 left-2 top-2.5 text-gray-500"
              />
              <input
                id="username"
                type="text"
                placeholder="Escribe su nombre de Usuario"
                className="w-full py-2 pl-10 pr-3 border-b border-green-500 bg-transparent focus:outline-none focus:border-green-700 transition duration-300"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              className="block text-lg font-bold mb-2 text-green-800"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <img
                src="lock-icon.svg"
                alt="lock-icon"
                className="absolute w-5 h-5 left-2 top-2.5 text-gray-500"
              />
              <input
                id="password"
                type="password"
                placeholder="Escribe su contraseña"
                className="w-full py-2 pl-10 pr-3 border-b border-green-500 bg-transparent focus:outline-none focus:border-green-700 transition duration-300"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              className="block text-lg font-bold mb-2 text-green-800"
              htmlFor="confirmPassword"
            >
              Confirmar Contraseña
            </label>
            <div className="relative">
              <img
                src="lock-icon.svg"
                alt="lock-icon"
                className="absolute w-5 h-5 left-2 top-2.5 text-gray-500"
              />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Escribe su contraseña"
                className="w-full py-2 pl-10 pr-3 border-b border-green-500 bg-transparent focus:outline-none focus:border-green-700 transition duration-300"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full font-semibold transition duration-300"
              type="submit"
            >
              CREAR CUENTA
            </button>
          </div>
        </form>
        <div className="text-center pt-5">
          <Link
            className="text-green-800 hover:text-green-600 font-bold"
            to={"/login"}
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
