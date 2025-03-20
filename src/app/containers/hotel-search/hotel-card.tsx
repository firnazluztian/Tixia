import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { Hotel } from "./types";

const facilityIcons: Record<string, string> = {
  "Swimming Pool": "/icon/pool.png",
  "Fitness Center": "/icon/gym.png",
  Spa: "/icon/spa.png",
  WiFi: "/icon/wifi.png",
  Receptionist: "/icon/receptionist.png",
  "Fine Dining Restaurant": "/icon/dining.png",
  "Business Center": "/icon/business.png",
  Ballroom: "/icon/ballroom.png",
  "24-hour Room Service": "/icon/room-service.png",
  Concierge: "/icon/concierge.png",
  // Add more mappings as needed
};

export const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams({
    hotelId: hotel.id.toString() || "",
    city: searchParams.get("city") || "",
    country: searchParams.get("country") || "",
    dateFrom: searchParams.get("dateFrom") || "",
    dateTo: searchParams.get("dateTo") || "",
    guests: searchParams.get("guests") || "",
    rooms: searchParams.get("rooms") || "",
    hotelData: encodeURIComponent(JSON.stringify(hotel)),
  });

  const getFacilityIcon = (facility: string) => {
    const cleanFacility = facility.replace(/[\[\]']/g, "").trim();
    return facilityIcons[cleanFacility];
  };

  return (
    <div
      onClick={() =>
        router.push(
          `/hotel/detail/${hotel?.name}/${hotel?.id}?${params.toString()}`
        )
      }
      className="cursor-pointer rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 mb-4 border border-gray-200 align-center"
    >
      {/* Hotel Image */}
      <div className="w-full md:w-72 h-48 relative rounded-lg overflow-hidden">
        <Image
          src={hotel.images[0]}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Hotel Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Hotel Name and Rating */}
          <div className="flex flex-col items-left gap-2 mb-2">
            <h3 className="text-xl font-semibold">{hotel.name}</h3>
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

          {/* Address */}
          <div className="flex items-start gap-2 mb-4 text-gray-600">
            <Icon
              icon="openmoji:location-indicator-red"
              className="w-5 h-5 md:w-6 md:h-6 ml-2"
            />
            <p>{hotel.address}</p>
          </div>

          {/* Facilities Icons */}
          <div className="flex flex-wrap gap-4 mb-4">
            {hotel.facilities
              .map((facility) => ({
                icon: getFacilityIcon(facility),
              }))
              .filter(({ icon }) => icon)
              .slice(0, 4)
              .map(({ icon }, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 relative">
                    <Image
                      src={icon}
                      width={24}
                      height={24}
                      className="object-contain"
                      alt=""
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Booking Options */}
          {/* Data is not given from API */}
          <div className="flex flex-wrap gap-2">
            <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm">
              Bisa refund
            </div>
            <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm">
              Bisa reschedule
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-end items-baseline mt-4 md:mt-0">
          <span className="text-2xl font-bold text-blue-600">
            IDR{" "}
            {new Intl.NumberFormat("id-ID").format(hotel.rooms[0]?.price || 0)}
          </span>
          <span className="text-gray-600 ml-1">/malam</span>
        </div>
      </div>
    </div>
  );
};
