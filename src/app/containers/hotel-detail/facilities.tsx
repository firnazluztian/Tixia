import { Icon } from "@iconify/react";
import { FacilitiesProps } from "./types";


export const Facilities = ({ data }: FacilitiesProps) => {
  return (
    <>
      <p className="text-lg font-bold">Fasilitas Hotel</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {data.map((item) => (
          <div key={item} className="flex gap-2 items-center">
            <Icon icon="material-symbols:pool" className="w-5 h-5" />
            <p className="text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-sm text-blue-600 cursor-pointer hover:underline">
          Tampilkan lebih banyak
        </p>
      </div>
    </>
  );
};
