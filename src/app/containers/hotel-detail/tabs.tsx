"use client";

interface Tab {
  name: string;
  id: string;
}

const schemaTabs: Tab[] = [
  { name: "Tentang Hotel", id: "description" },
  { name: "Fasilitas", id: "facilities" },
  { name: "Kamar", id: "rooms" },
  { name: "Review", id: "review" },
  { name: "Lokasi", id: "location" },
  { name: "Kebijakan Hotel", id: "policy" },
];

export const Tabs = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[72px] md:top-[96px] bg-white z-40 -mx-4 md:mx-0 px-4 md:px-0">
      <div className="flex gap-4 py-3 md:py-5 overflow-x-auto scrollbar-hide">
        {schemaTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className="cursor-pointer flex gap-4 hover:text-blue-600 whitespace-nowrap text-sm md:text-base"
          >
            <p>{tab.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 