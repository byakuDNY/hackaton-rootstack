import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        const productosUnicos = (arr, num) => {
          const seleccionado = new Set();
          while (seleccionado.size < num && seleccionado.size < arr.length) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            seleccionado.add(arr[randomIndex]);
          }
          return Array.from(selected);
        };
        const productosAleatorio = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
        setProducts(productosAleatorio);
      } catch (error) {
        console.error("Error obteniendo productos: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl font-bold mb-4">
            ¡Bienvenido a Agro Market!
          </h1>
          <p className="text-xl mb-6">
            Frescura, calidad y sostenibilidad en cada compra, directamente de
            la tierra local a tu mesa.
          </p>
          <Link
            to="/catalogo"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
          >
            Explorar Catálogo
          </Link>
        </div>
      </section>

      <main className="p-6">
        <section className="mb-10 p-8 text-center bg-yellow-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-900">
            Nuestro Propósito
          </h2>
          <p className="text-lg mb-4 text-green-800">
            Agro Market conecta directamente a agricultores locales con
            consumidores, promoviendo el consumo de productos frescos y
            sostenibles. Apoyamos a las comunidades agrícolas y reducimos la
            intermediación.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-green-900">
            Impacto Social
          </h2>
          <p className="text-lg text-green-800">
            Fomentamos el crecimiento de pequeños agricultores, promovemos
            prácticas sostenibles y empoderamos a las comunidades.
          </p>
          <blockquote className="text-xl italic mt-6 text-green-700">
            "Frescura y sostenibilidad en cada compra"
          </blockquote>
        </section>

        <div className="bg-green-100 py-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-green-900">
            ¡Los productos más populares en este momento!
          </h1>
          <div className="flex flex-wrap gap-x-5 gap-y-5 justify-center p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
