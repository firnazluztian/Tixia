"use client";
import { useEffect, useState, use } from 'react';
import { Hotel } from '@/app/containers/hotel-search/types';
import { HotelDetailContainer } from "@/app/containers/hotel-detail";

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

export default function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [previewData, setPreviewData] = useState<Hotel | null>(null);
  const resolvedParams = use(params);

  // apparently recoil is not working here causing conflict with ssr operation, so i need to use local storage to store the data
  useEffect(() => {
    const storedData = localStorage.getItem(`hotel_preview_${resolvedParams.id}`);
    if (storedData) {
      setPreviewData(JSON.parse(storedData));
      localStorage.removeItem(`hotel_preview_${resolvedParams.id}`);
    }
  }, [resolvedParams.id]);

  if (!previewData) {
    return <div>Loading...</div>;
  }
  
  return <HotelDetailContainer hotel={previewData} />;
} 