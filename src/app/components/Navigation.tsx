"use client";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-12 absolute top-0 z-100 bg-[#007ADE]">
      <div
        onClick={() => router.push("/")}
        className="text-white text-2xl font-bold cursor-pointer"
      >
        STAYKUY
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <List />
        </div>
        <div className="w-10 h-10 bg-white rounded-full text-gray-800 flex items-center justify-center">
          T
        </div>
        <div className="text-white rounded-full">ID</div>
      </div>
    </nav>
  );
};

const List = () => {
  const handleClick = () => {
    // handle click
  };
  return (
    <div className="flex items-center gap-5">
      {schema.map((item) => (
        <a
          onClick={handleClick}
          key={item.id}
          href={item.href}
          className="text-white hover:text-gray-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

const schema = [
  {
    id: 1,
    name: "My Booking",
    href: "/my-booking",
  },
  {
    id: 2,
    name: "Wishlist",
    href: "/wishlist",
  },
  {
    id: 3,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    name: "Help",
    href: "/help",
  },
];
