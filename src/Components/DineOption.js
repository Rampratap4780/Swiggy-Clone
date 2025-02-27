import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20 mb-20">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Discover best restaurants on Dineout
      </p>
      <div className="flex flex-wrap justify-center sm:justify-start overflow-x-auto mt-5 gap-4">
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData} />
        ))}
      </div>
    </div>
  );
}
