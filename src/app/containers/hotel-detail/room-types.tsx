import Image from "next/image";
import { Icon } from "@iconify/react";
import { RoomTypesProps } from "./types";
import type { Room } from "./types";

export const RoomTypes = ({ data }: RoomTypesProps) => {
  return (
    <div id="rooms">
      <p className="text-lg font-bold mb-4">Tipe dan Harga Kamar</p>
      <div className="grid gap-4">
        {data?.map((item) => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </div>
  );
};

const Room = ({ room }: { room: Room }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <div className="md:col-span-1 border rounded-xl overflow-hidden shadow-md border-gray-200">
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src={room.images?.[0] || "/placeholder.jpg"}
            alt={room.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-between items-center my-4 px-2 text-sm text-gray-600">
          <p>Kamar {room.name}</p>
          <p>{room.size} m²</p>
        </div>
      </div>
      <div className="md:col-span-3 border rounded-xl overflow-hidden shadow-md border-gray-200 p-4 md:p-5">
        <div className="space-y-2">
          <p className="text-lg font-bold">Kamar {room.name}</p>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm whitespace-nowrap">
              Bisa refund
            </div>
            <div className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm whitespace-nowrap">
              Bisa reschedule
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit mt-2">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:account-multiple" className="w-5 h-5" />
                <span>{room.guest_capacity} Tamu</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="ic:baseline-bed" className="w-5 h-5" />
                <span>1 {room.bed_type}</span>
              </div>
              {room.is_breakfast_included && (
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:food" className="w-5 h-5" />
                  <span>Tidak termasuk sarapan</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Icon icon="mdi:wifi" className="w-5 h-5" />
                <span>Wi-fi gratis</span>
              </div>
            </div>
            <div className="text-right md:min-w-[200px]">
              <div className="flex flex-col items-end mb-3">
                <span className="line-through text-gray-400">
                  IDR{" "}
                  {new Intl.NumberFormat("id-ID").format(room.price + 100000)}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  IDR {new Intl.NumberFormat("id-ID").format(room.price)}{" "}
                  <span className="text-gray-600 text-sm">/malam</span>
                </span>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Pilih Kamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
