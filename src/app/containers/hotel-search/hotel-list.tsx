"use client";
import { useEffect, useState } from "react";
import { HotelCard } from "./hotel-card";
import { Pagination } from "./pagination";
import { useAction } from "./hooks/useAction";
import { HotelSearchResponse } from "./types";
import { Filter } from "./filter";

export const HotelList = () => {
  const { fetchHotels, filters, updateFilters } = useAction();
  const [hotels, setHotels] = useState<HotelSearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const response = await fetchHotels(currentPage);
        setHotels(response);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch hotels");
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, [fetchHotels, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLoading(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
        <div className="lg:col-span-1 order-1 lg:order-1">
          <Filter filters={filters} onFilterChange={updateFilters} />
        </div>
        <div className="lg:col-span-4 order-2 lg:order-2">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <>
              <div className="flex items-center align-center gap-2 mb-5">
                <h1 className="text-2xl font-semibold">Hasil Pencarian</h1>
                <p className="text-gray-500 text-sm">
                  {hotels?.data?.total || 0} hotel ditemukan
                </p>
              </div>
              {hotels?.data?.data.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
              {(hotels?.data?.total || 0) > 0 && (
                <Pagination
                  currentPage={hotels?.data?.page || 1}
                  totalPages={hotels?.data?.total_pages || 1}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
