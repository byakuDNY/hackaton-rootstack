import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-48 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          ${product.price.toFixed(2)} x lb
        </p>
      </div>
      <div className="px-6 py-4">
        <Link to={`/product/${product.id}`}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
