import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import { InputDateProps } from "./types";

export function InputDate({
  dateRange,
  errors,
  handleDateChange,
}: InputDateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDateChange(e);
    if (e.target.name === 'to') {
      setIsOpen(false);
    }
  };

  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Tanggal Menginap
      </label>
      <div className="relative" ref={datePickerRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full h-[42px] px-3 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center cursor-pointer ${
            !dateRange.from ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {dateRange.from 
            ? `${formatDate(dateRange.from)}${dateRange.to ? ` - ${formatDate(dateRange.to)}` : ''}`
            : "Pilih Tanggal Menginap"
          }
          <Icon
            icon="mdi:calendar"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>

        {isOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Check-in</label>
                <div 
                  onClick={() => fromInputRef.current?.showPicker()}
                  className="w-full h-[42px] px-3 border-gray-300 border rounded-md flex items-center cursor-pointer relative"
                >
                  {formatDate(dateRange.from) || 'Select date'}
                  <input
                    ref={fromInputRef}
                    type="date"
                    name="from"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    value={dateRange.from}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Check-out</label>
                <div 
                  onClick={() => toInputRef.current?.showPicker()}
                  className="w-full h-[42px] px-3 border-gray-300 border rounded-md flex items-center cursor-pointer relative"
                >
                  {formatDate(dateRange.to) || 'Select date'}
                  <input
                    ref={toInputRef}
                    type="date"
                    name="to"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    value={dateRange.to}
                    onChange={handleChange}
                    min={dateRange.from || new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {errors.date && (
        <p className="text-red-500 text-xs mt-1">
          Please select check-in and check-out dates
        </p>
      )}
    </div>
  );
}
