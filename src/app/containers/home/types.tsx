import { RefObject } from "react";

export interface GuestsAndRooms {
  guests: number;
  rooms: number;
}

export interface City {
  id: number;
  name: string;
  country: string;
}

export interface HomeContainerProps {
  cities: City[];
}

export interface InputCityProps {
  dropdownRef: RefObject<HTMLDivElement | null>;
  selectedCity: City | null;
  searchTerm: string;
  isSearchOpen: boolean;
  errors: { city: boolean };
  filteredCities: City[];
  setIsSearchOpen: (value: boolean) => void;
  handleCitySearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCitySelect: (city: City) => void;
}

export interface InputDateProps {
  dateRange: {
    from: string;
    to: string;
  };
  errors: { date: boolean };
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface GuestsAndRooms {
  guests: number;
  rooms: number;
}

export interface InputGuestsProps {
  guestsDropdownRef: RefObject<HTMLDivElement | null>;
  guestsAndRooms: GuestsAndRooms;
  isGuestsOpen: boolean;
  errors: { guests: boolean };
  setIsGuestsOpen: (value: boolean) => void;
  handleGuestsChange: (type: 'guests' | 'rooms', operation: 'increment' | 'decrement') => void;
}
