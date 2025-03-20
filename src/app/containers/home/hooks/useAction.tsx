"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchHistory } from "@/app/hooks/useSearchHistory";
import { City, GuestsAndRooms } from "../types";

export const useAction = (cities: City[]) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });
  const [guestsAndRooms, setGuestsAndRooms] = useState<GuestsAndRooms>({
    guests: 0,
    rooms: 0,
  });
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [errors, setErrors] = useState({
    city: false,
    date: false,
    guests: false,
  });

  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const guestsDropdownRef = useRef<HTMLDivElement>(null);
  const { saveSearchHistory } = useSearchHistory();

  const filteredCities = cities?.filter(
    (city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        guestsDropdownRef.current &&
        !guestsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGuestsChange = (
    type: "guests" | "rooms",
    operation: "increment" | "decrement"
  ) => {
    setGuestsAndRooms((prev) => {
      const newValue =
        operation === "increment" ? prev[type] + 1 : prev[type] - 1;

      if (type === "rooms") {
        if (newValue < 1 || newValue > prev.guests) return prev;
      } else {
        if (newValue < prev.rooms || newValue > 20) return prev;
      }

      return {
        ...prev,
        [type]: newValue,
      };
    });
  };

  const handleSubmit = () => {
    const newErrors = {
      city: !selectedCity,
      date: !dateRange.from || !dateRange.to,
      guests: guestsAndRooms.guests < 1 || guestsAndRooms.rooms < 1,
    };

    setErrors(newErrors);

    if (!newErrors.city && !newErrors.date && !newErrors.guests) {
      const searchParams = new URLSearchParams({
        city: selectedCity?.name || "",
        country: selectedCity?.country || "",
        dateFrom: dateRange.from,
        dateTo: dateRange.to,
        guests: guestsAndRooms.guests.toString(),
        rooms: guestsAndRooms.rooms.toString(),
      });

      // Save search history
      saveSearchHistory({
        city: selectedCity?.name || "",
        country: selectedCity?.country || "",
        dateFrom: dateRange.from,
        dateTo: dateRange.to,
        guests: guestsAndRooms.guests.toString(),
        rooms: guestsAndRooms.rooms.toString(),
      });

      router.push(`/hotel/search?${searchParams.toString()}`);
    }
  };

  const handleCitySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedCity(null);
    setIsSearchOpen(true);
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setSearchTerm("");
    setIsSearchOpen(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    // states
    isSearchOpen,
    searchTerm,
    selectedCity,
    dateRange,
    guestsAndRooms,
    isGuestsOpen,
    errors,
    filteredCities,
    dropdownRef,
    guestsDropdownRef,

    // actions
    setIsSearchOpen,
    handleSubmit,
    handleCitySearch,
    handleCitySelect,
    handleDateChange,
    setIsGuestsOpen,
    handleGuestsChange,
  };
};
