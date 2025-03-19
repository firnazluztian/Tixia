import { Accordion } from "@/app/components/Accordion";
import { FilterState } from "./hooks/useAction";
import { useState, useEffect } from 'react';

interface FilterProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export const Filter = ({ filters, onFilterChange }: FilterProps) => {
  const [localPrice, setLocalPrice] = useState(filters?.maxPrice);

  useEffect(() => {
    setLocalPrice(filters?.maxPrice);
  }, [filters?.maxPrice]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalPrice(value);
  };

  const handlePriceChangeEnd = () => {
    if (localPrice !== filters?.maxPrice) {
      onFilterChange({ maxPrice: localPrice });
    }
  };

  const FilterContent = () => (
    <>
      {/* Hotel Star Rating */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Bintang Hotel</h3>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center gap-3 mb-2">
            <input 
              type="checkbox" 
              className="w-5 h-5"
              checked={filters?.stars?.includes(rating)}
              onChange={(e) => {
                const newStars = e.target.checked 
                  ? [...filters?.stars, rating]
                  : filters?.stars?.filter(s => s !== rating);
                onFilterChange({ stars: newStars });
              }}
            />
            <div className="flex">
              {[...Array(rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Facilities */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Fasilitas</h3>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {[
            "Kolam Renang",
            "Parkir Gratis",
            "Pusat Kebugaran",
            "SPA",
            "Mesin Cuci",
          ].map((facility) => (
            <div key={facility} className="flex items-center gap-3 mb-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>{facility}</span>
            </div>
          ))}
        </div>
        <button className="text-blue-600 mt-2">+ Tampilkan lebih banyak</button>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Price Range */}
      <div>
        <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Harga</h3>
        <input
          type="range"
          className="w-full accent-blue-600"
          min={filters?.minPrice || 0}
          max={2000000}
          step={100000}
          value={localPrice}
          onChange={handlePriceChange}
          onMouseUp={handlePriceChangeEnd}
          onTouchEnd={handlePriceChangeEnd}
        />
        <div className="flex justify-between mt-2">
          <span>IDR {new Intl.NumberFormat("id-ID").format(filters?.minPrice)}</span>
          <span>IDR {new Intl.NumberFormat("id-ID").format(localPrice)}</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:sticky top-24">
      <div className="lg:hidden">
        <Accordion title="Filter Pencarian" defaultOpen={false}>
          <FilterContent />
        </Accordion>
      </div>
      <div className="hidden lg:block p-4 md:p-6 bg-white rounded-lg border border-gray-200 shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Filter Pencarian</h2>
        <FilterContent />
      </div>
    </div>
  );
};
