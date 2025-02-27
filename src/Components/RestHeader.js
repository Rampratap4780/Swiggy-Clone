import { useSelector } from "react-redux";
import { Link } from "react-router"; // Corrected for compatibility.

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <div className="container mx-auto p-4 bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center shadow-lg rounded-lg">
      <div>
        <p className="text-orange-400 font-bold text-2xl md:text-3xl">Swiggy</p>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link to="/Checkout">
          <p className="bg-orange-500 px-3 md:px-4 py-2 rounded-lg text-white hover:bg-orange-600 transition duration-300">
            Cart {`(${counter})`}
          </p>
        </Link>
      </div>
    </div>
  );
}
