import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../AuthContext";
import BgImage from "../components/BgImage";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser, userAccounts } = useAuthContext();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Por favor llena todos los campos");
      return;
    }
    const user = userAccounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (!user) {
      toast.error("Credenciales inválidas");
      return;
    }
    toast.success(`Bienvenido ${username}`);
    localStorage.setItem("token", JSON.stringify({ username }));
    setAuthUser({ username });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BgImage bgImage={"/login-bg.jpg"} />
      <div className="w-full max-w-md bg-yellow-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-8 text-green-900">
          Inicio de Sesión
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              className="block text-lg font-bold mb-2 text-green-800"
              htmlFor="usuario"
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
                id="usuario"
                type="text"
                placeholder="Escribe tu nombre de Usuario"
                className="w-full py-2 pl-10 pr-3 border-b border-green-500 bg-transparent focus:outline-none focus:border-green-700 transition duration-300"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block text-lg font-bold mb-2 text-green-800"
              htmlFor="contraseña"
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
                id="contraseña"
                type="password"
                placeholder="Escribe tu contraseña"
                className="w-full py-2 pl-10 pr-3 border-b border-green-500 bg-transparent focus:outline-none focus:border-green-700 transition duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full font-semibold transition duration-300"
              type="submit"
            >
              INICIAR SESIÓN
            </button>
          </div>
        </form>

        {/* Link to Signup */}
        <div className="text-center pt-5">
          <Link
            className="text-green-800 hover:text-green-600 font-bold"
            to={"/signup"}
          >
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
