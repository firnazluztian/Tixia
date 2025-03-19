import { Icon } from "@iconify/react";
import { RefObject } from "react";

interface GuestsAndRooms {
  guests: number;
  rooms: number;
}

interface InputGuestsProps {
  guestsDropdownRef: RefObject<HTMLDivElement | null>;
  guestsAndRooms: GuestsAndRooms;
  isGuestsOpen: boolean;
  errors: { guests: boolean };
  setIsGuestsOpen: (value: boolean) => void;
  handleGuestsChange: (type: 'guests' | 'rooms', operation: 'increment' | 'decrement') => void;
}

export function InputGuests({
  guestsDropdownRef,
  guestsAndRooms,
  isGuestsOpen,
  errors,
  setIsGuestsOpen,
  handleGuestsChange,
}: InputGuestsProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Jumlah Tamu dan Kamar
      </label>
      <div className="relative" ref={guestsDropdownRef}>
        <div
          className="w-full h-[42px] px-3 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center justify-between cursor-pointer"
          onClick={() => setIsGuestsOpen(!isGuestsOpen)}
        >
          <span className={guestsAndRooms.guests === 0 ? "text-gray-400" : "text-gray-900"}>
            {guestsAndRooms.guests === 0
              ? "Masukan jumlah tamu dan kamar"
              : `${guestsAndRooms.guests} Tamu, ${guestsAndRooms.rooms} Kamar`}
          </span>
          <Icon icon="mdi:chevron-down" className="w-5 h-5 text-gray-400" />
        </div>

        {isGuestsOpen && (
          <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tamu</p>
                  <p className="text-sm text-gray-500">Max. 20 tamu</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleGuestsChange('guests', 'decrement')}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
                    disabled={guestsAndRooms.guests <= guestsAndRooms.rooms}
                  >
                    <Icon icon="mdi:minus" className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center">{guestsAndRooms.guests}</span>
                  <button
                    onClick={() => handleGuestsChange('guests', 'increment')}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
                    disabled={guestsAndRooms.guests >= 20}
                  >
                    <Icon icon="mdi:plus" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Kamar</p>
                  <p className="text-sm text-gray-500">Max. sesuai jumlah tamu</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleGuestsChange('rooms', 'decrement')}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
                    disabled={guestsAndRooms.rooms <= 1}
                  >
                    <Icon icon="mdi:minus" className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center">{guestsAndRooms.rooms}</span>
                  <button
                    onClick={() => handleGuestsChange('rooms', 'increment')}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
                    disabled={guestsAndRooms.rooms >= guestsAndRooms.guests}
                  >
                    <Icon icon="mdi:plus" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {errors.guests && (
        <p className="text-red-500 text-xs mt-1">Please enter number of guests and rooms</p>
      )}
    </div>
  );
}