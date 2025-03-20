"use client";
import { Tab } from "./types";

const TABS: Tab[] = [
  { name: "Tentang Hotel", id: "description" },
  { name: "Fasilitas", id: "facilities" },
  { name: "Kamar", id: "rooms" },
  { name: "Review", id: "review" },
  { name: "Lokasi", id: "location" },
  { name: "Kebijakan Hotel", id: "policy" },
];

const HEADER_OFFSET = -100;

export const Tabs = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white -mx-4 md:mx-0 px-4 md:px-0">
      <div className="flex gap-4 py-3 md:py-5 overflow-x-auto scrollbar-hide">
        {TABS.map(({ id, name }) => (
          <div
            key={id}
            onClick={() => scrollToSection(id)}
            className="cursor-pointer flex gap-4 hover:text-blue-600 whitespace-nowrap text-sm md:text-base"
          >
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
