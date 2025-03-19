"use client";
import { Navigation } from "@/app/components/Navigation";
import { SearchParams } from "../hotel-search/search-params";
import { Description } from "./description";
import { Facilities } from "./facilities";
import { Location } from "./location";
import { Policy } from "./policy";
import { Review } from "./review";
import { RoomTypes } from "./room-types";
import { Tabs } from "./tabs";
import { Header } from "./header";
interface HotelDetailProps {
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

export const HotelDetailContainer = ({ hotel }: HotelDetailProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navigation />
      </div>
      <div className="pt-20 md:pt-24 px-4 md:px-6 lg:px-12 max-w-[1440px] mx-auto pb-5">
        <div className="mb-4 md:mb-0">
          <SearchParams />
        </div>
        <Header hotel={hotel} />
        <Tabs />
        <div className="grid gap-6 md:gap-8">
          <Description data={hotel.description} />
          <Facilities data={hotel.facilities} />
          <RoomTypes data={hotel.rooms} />
          <Review />
          <Location data={{ latitude: hotel.latitude, longitude: hotel.longitude }} />
          <Policy data={hotel.policy} />
        </div>
      </div>
    </>
  );
};
