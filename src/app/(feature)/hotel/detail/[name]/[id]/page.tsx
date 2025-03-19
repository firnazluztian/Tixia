"use client";

import { HotelDetailContainer } from "@/app/containers/hotel-detail";
import { useSearchParams } from "next/navigation";

// interface HotelDetailResponse {
//   data: {
//     id: number;
//     name: string;
//     star: number;
//     address: string;
//     description: string;
//     policy: string;
//     images: string[];
//     facilities: string[];
//     latitude: number;
//     longitude: number;
//     rooms: {
//       id: number;
//       name: string;
//       price: number;
//       bed_type: string;
//       size: number;
//       guest_capacity: number;
//       facilities: string[];
//       is_breakfast_included: boolean;
//       available_rooms: number;
//       total_rooms: number;
//     }[];
//     city: {
//       id: number;
//       name: string;
//       country: string;
//     };
//   };
//   statusCode: number;
//   success: boolean;
// }

//  A LOT OF DATA IS MISSING FROM THE API LIKE ROOMS, CITY, POLICY, REVIEW, ETC.
//  thus i will be using the data from the search page instead of refetching by id
// async function getHotelDetail(id: string): Promise<HotelDetailResponse> {
//   const res = await fetch(
//     `https://ota-gin.onrender.com/api/v1/hotels/${id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch hotel detail");
//   }

//   return res.json();
// }

// export default async function HotelDetailPage({
//   params,
// }: {
//   params: { name: string, id: string };
// }) {
//   console.log(params);
//   const hotel = await getHotelDetail(params.id);

//   return <HotelDetailContainer hotel={hotel.data} />;
// } 

export default function HotelDetailPage() {
  const searchParams = useSearchParams();
  const hotelData = searchParams.get('hotelData');
  const hotel = hotelData ? JSON.parse(decodeURIComponent(hotelData)) : null;

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return <HotelDetailContainer hotel={hotel} />;
} 