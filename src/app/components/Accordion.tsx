"use client";

import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const Accordion = ({ title, children, defaultOpen = false, className = "" }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      <button
        className="w-full flex items-center justify-between p-4 md:p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="p-4 md:p-6 pt-0">{children}</div>
      </div>
    </div>
  );
}; 