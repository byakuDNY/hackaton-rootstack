// import bgMusicAuth from "../assets/bg-music-auth.mp3";
// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { useAuthContext } from "../AuthContext";
// import { VITE_BACKEND_URL } from "./Homepage";

const Login = () => {
  const [username] = useState("hackaton");

  const [password, setPassword] = useState("hackaton123");
  //   const [loading, setLoading] = useState(false);
  //   const { setAuthUser } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Por favor llena todos los campos");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-6xl text-center p-10 font-extrabold font-outline-2">
          Inicio de Sesión
        </h1>
        <div className="flex justify-center items-center flex-col">
          <form onSubmit={handleLogin} className="sm:w-1/3 p-4 mt-10">
            <div className="mb-6">
              <label
                className="block font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="usuario"
              >
                Nombre de usuario
              </label>
              <div className="flex items-center focus-within:text-gray-700">
                <img
                  src="user-icon.svg"
                  alt="user-icon"
                  className="absolute w-5 h-5"
                />
                <input
                  id="usuario"
                  type="text"
                  placeholder="Escribe tu nombre de Usuario"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={username}
                  // onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block  font-outline-2 text-xl font-extrabold mb-2"
                htmlFor="contraseña"
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
                  id="contraseña"
                  type="password"
                  placeholder="Escribe tu contraseña"
                  className="w-full py-2 pl-10 pr-3 bg-transparent border-b border-white focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center p-5">
              <button
                className="bg-amber-500 hover:bg-amber-600  text-2xl font-extrabold py-2 px-4 rounded font-outline-2 focus:outline-white"
                type="submit"
              >
                INICIAR SESIÓN
              </button>
            </div>
          </form>
          <div className="p-10">
            <Link
              className=" text-xl font-extrabold py-2 px-4 hover:text-gray-200 font-outline-2 focus:outline-white"
              to={"/signup"}
            >
              Registrarme
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
