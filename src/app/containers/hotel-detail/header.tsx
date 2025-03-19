import Image from "next/image";
import { Icon } from "@iconify/react";

interface HeaderProps {
  hotel: {
    name: string;
    star: number;
    address: string;
    images: string[];
  };
}

export const Header = ({ hotel }: HeaderProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 pt-4 items-start md:items-center">
        <h1 className="text-xl md:text-2xl font-bold">{hotel?.name}</h1>
        <div className="flex">
          {[...Array(hotel.star)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <div className="flex gap-1 mb-4 text-gray-600 text-left items-center">
        <Icon icon="openmoji:location-indicator-red" className="w-5 h-5" />
        <p className="text-sm md:text-base">{hotel.address}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative h-[250px] md:h-[400px]">
          <Image
            src={hotel?.images[0]}
            alt={hotel?.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 md:col-span-1 gap-2 md:gap-4">
          {hotel?.images?.slice(1, 5)?.map((image: string, index: number) => (
            <div key={index} className="relative h-[190px]">
              <Image
                src={image}
                alt={hotel?.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
