import { HotelSearchContainer } from "@/app/containers/hotel-search";
import { Suspense } from 'react';
import SearchLoading from './loading';

async function getHotels(searchParams: { [key: string]: string | string[] | undefined }) {
  const params = new URLSearchParams({
    city_id: searchParams.city_id?.toString() || "",
    date: searchParams.dateFrom?.toString() || "",
    nights: "1",
    rooms_count: searchParams.rooms?.toString() || "1",
    adult_guests: searchParams.guests?.toString() || "2",
    child_guests: "0",
    page: searchParams.page?.toString() || "1",
    page_size: "10",
  });

  try {
    const response = await fetch(
      `https://ota-gin.onrender.com/api/v1/hotels/search?${params.toString()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return {
      data: {
        data: [],
        page: 1,
        page_size: 10,
        total: 0,
        total_pages: 0
      },
      statusCode: 500,
      success: false
    };
  }
}

export default async function SearchPage({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  const initialData = await getHotels(searchParams);

  return (
    <Suspense fallback={<SearchLoading />}>
      <HotelSearchContainer initialData={initialData} />
    </Suspense>
  );
}
