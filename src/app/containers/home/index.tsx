"use client";

import { Navigation } from "@/app/components/Navigation";
import { Icon } from "@iconify/react";
import { useAction } from "./hooks/useAction";
import { InputCity } from "./input-city";
import { InputDate } from "./input-date";
import { InputGuests } from "./input-guests";

interface City {
  id: number;
  name: string;
  country: string;
}

interface HomeContainerProps {
  cities: City[];
}

export function HomeContainer({ cities }: HomeContainerProps) {
  const {
    isSearchOpen,
    searchTerm,
    selectedCity,
    dateRange,
    errors,
    filteredCities,
    dropdownRef,
    setIsSearchOpen,
    handleSubmit,
    handleCitySearch,
    handleCitySelect,
    handleDateChange,
    handleGuestsChange,
    guestsAndRooms,
    isGuestsOpen,
    guestsDropdownRef,
    setIsGuestsOpen
  } = useAction(cities);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url(/img/bg.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <Navigation />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 px-4 md:px-0">
          Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
          banyak promo menarik!
        </h1>

        <div className="w-full max-w-7xl bg-white rounded-lg p-3 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 md:gap-4 items-start">
            <InputCity
              dropdownRef={dropdownRef}
              selectedCity={selectedCity}
              searchTerm={searchTerm}
              isSearchOpen={isSearchOpen}
              errors={errors}
              filteredCities={filteredCities}
              setIsSearchOpen={setIsSearchOpen}
              handleCitySearch={handleCitySearch}
              handleCitySelect={handleCitySelect}
            />

            <InputDate
              dateRange={dateRange}
              errors={errors}
              handleDateChange={handleDateChange}
            />

            <InputGuests
              guestsDropdownRef={guestsDropdownRef}
              guestsAndRooms={guestsAndRooms}
              isGuestsOpen={isGuestsOpen}
              errors={errors}
              setIsGuestsOpen={setIsGuestsOpen}
              handleGuestsChange={handleGuestsChange}
            />

            <button
              onClick={handleSubmit}
              className="px-8 h-[42px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors self-end"
            >
              Cari Hotel
            </button>
          </div>
        </div>

        <div className="w-full max-w-7xl mt-3 md:mt-4 flex justify-center md:justify-start">
          <div className="bg-blue-500 opacity-70 text-white py-2 rounded-md p-2 flex items-center justify-center w-fit cursor-pointer text-sm md:text-base">
            Lihat Pencarian Terakhir-mu
            <Icon icon="mdi:chevron-down" className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
