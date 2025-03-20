export interface DescriptionProps {
  data: string;
}

export interface FacilitiesProps {
  data: string[];
}

export interface HeaderProps {
  hotel: {
    name: string;
    star: number;
    address: string;
    images: string[];
  };
}

export interface HotelDetailProps {
  hotel: {
    id: number;
    name: string;
    star: number;
    address: string;
    description: string;
    policy: string;
    images: string[];
    facilities: string[];
    latitude: number;
    longitude: number;
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
  };
}

export interface LocationProps {
  data: {
    latitude: number;
    longitude: number;
  };
}

export interface PolicyProps {
  data: string;
}

export interface Room {
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
  images?: string[];
}

export interface RoomTypesProps {
  data: Room[];
}

export interface Tab {
  name: string;
  id: string;
}

