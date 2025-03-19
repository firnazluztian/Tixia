import dynamic from "next/dynamic";

const HotelSearchContainer = dynamic(() => import("@/app/containers/hotel-search").then(mod => mod.HotelSearchContainer), {
  ssr: true,
});

export default function SearchPage() {
  return (
      <HotelSearchContainer />
  );
}
