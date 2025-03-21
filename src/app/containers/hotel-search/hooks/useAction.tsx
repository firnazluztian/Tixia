import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { FilterState, HotelSearchResponse } from "../types";

export const useAction = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    stars: [],
    facilities: [],
    minPrice: 0,
    maxPrice: 999999999,
  });

  const fetchHotels = useCallback(
    async (page: number = 1): Promise<HotelSearchResponse> => {
      const params: Record<string, string> = {
        city_id: searchParams.get("city_id") || "",
        date: searchParams.get("dateFrom") || "",
        nights: searchParams.get("nights") || "1",
        rooms_count: searchParams.get("rooms") || "1",
        adult_guests: searchParams.get("guests") || "2",
        child_guests: "0",
        page: page.toString(),
        page_size: "10",
        ...(filters?.stars?.length > 0 && { stars: filters?.stars?.join(",") }),
        ...(filters?.facilities?.length > 0 && {
          facilities: filters?.facilities?.join(","),
        }),
        ...(filters?.minPrice > 0 && {
          min_price: filters?.minPrice?.toString(),
        }),
        ...(filters?.maxPrice < 999999999 && {
          max_price: filters?.maxPrice?.toString(),
        }),
      };

      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `https://ota-gin.onrender.com/api/v1/hotels/search?${queryString}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      return data;
    },
    [searchParams, filters]
  );

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    filters,
    updateFilters,
    fetchHotels,
  };
};
