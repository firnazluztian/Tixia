export interface HotelSearchResponse {
  data: {
    data: Hotel[];
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
  };
  statusCode: number;
  success: boolean;
}

export interface Hotel {
  id: number;
  name: string;
  star: number;
  address: string;
  images: string[];
  facilities: string[];
  rooms: {
    id: number;
    name: string;
    price: number;
    bed_type: string;
    size: number;
    guest_capacity: number;
    facilities: string[];
    is_breakfast_included: boolean;
    available_rooms: number;
    total_rooms: number;
  }[];
  city: {
    id: number;
    name: string;
    country: string;
  };
  description: string;
  policy: string;
  latitude: number;
  longitude: number;
}

export interface FilterState {
  stars: number[];
  facilities: string[];
  minPrice: number;
  maxPrice: number;
}

export interface FilterProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}