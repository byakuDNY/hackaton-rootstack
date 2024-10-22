import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to={"/"} className="flex justify-center items-center">
            <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            Agro Market
          </Link>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full hover:bg-yellow-500"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-white hover:text-yellow-300">
              Nosotros
            </Link>
          </li>
        </ul>
        <div className="relative z-10">
          <div className="flex gap-x-10">
            <a href="/cart">
              <img src="/cart.svg" alt="" className=" w-9 h-auto" />
            </a>
            <button
              className="flex items-center space-x-2 text-white hover:text-yellow-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              <img src="/user-icon.svg" alt="user-icon" className="w-9 h-auto" />
              <span className="text-lg">
                {authUser ? authUser.username : "Usuario"}
              </span>
            </button>
          </div>

          {isDropdownOpen && (
            <ul className="absolute z-10 top-8 right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg py-1 text-green-900">
              {authUser ? (
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Cerrar Sesión
                </li>
              ) : (
                <Link
                  to={"/login"}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  Iniciar Sesión
                </Link>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
