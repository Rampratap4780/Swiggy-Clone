import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">Checkout</h1>
      <div className="grid gap-6">
        {items.map((value, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
            <p className="text-xl font-semibold text-gray-800">{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
