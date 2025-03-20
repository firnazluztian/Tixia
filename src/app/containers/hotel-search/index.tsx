"use client";
import { Navigation } from "@/app/components/Navigation";
import dynamic from "next/dynamic";
import { HotelList } from "./hotel-list";

const SearchParams = dynamic(
  () => import("./search-params").then((mod) => mod.SearchParams),
  { ssr: false }
);

export function HotelSearchContainer() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navigation />
      </div>
      <div className="pt-24 px-4 md:px-6 lg:px-12 max-w-[1440px] mx-auto pb-5">
        <div className="">
          <SearchParams />
        </div>
        <div className="relative z-10 pt-4">
          <HotelList />
        </div>
      </div>
    </>
  );
}

