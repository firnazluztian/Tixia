import { Icon } from "@iconify/react";
import { InputCityProps } from "./types";

export function InputCity({
  dropdownRef,
  selectedCity,
  searchTerm,
  isSearchOpen,
  errors,
  filteredCities,
  setIsSearchOpen,
  handleCitySearch,
  handleCitySelect,
}: InputCityProps) {
  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Pilih Kota/Nama Hotel/ Destinasi
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full h-[42px] px-3 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Pilih nama hotel/destinasi/kota menginap"
          value={selectedCity ? `${selectedCity.name}, ${selectedCity.country}` : searchTerm}
          onChange={handleCitySearch}
          onClick={() => setIsSearchOpen(true)}
        />
        <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      {errors.city && (
        <p className="text-red-500 text-xs mt-1">Please select a city</p>
      )}
      {isSearchOpen && filteredCities && filteredCities.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-20">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCitySelect(city)}
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}