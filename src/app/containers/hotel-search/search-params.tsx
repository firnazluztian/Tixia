import { Accordion } from "@/app/components/Accordion";
import { useSearchParams, useRouter } from "next/navigation";

export const SearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const city = searchParams.get("city");
  // const country = searchParams.get("country");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");
  const guests = searchParams.get("guests");
  const rooms = searchParams.get("rooms");

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const SearchContent = () => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full justify-between">
      <div className="flex flex-col w-full md:w-auto">
        <span className="text-sm text-gray-600">
          Kota/Nama Hotel/ Destinasi
        </span>
        <p className="font-medium">
          {city}
        </p>
      </div>

      <div className="hidden md:block h-12 w-[1px] bg-gray-200" />
      <hr className="w-full border-gray-200 md:hidden" />

      <div className="flex flex-col w-full md:w-auto">
        <span className="text-sm text-gray-600">Tanggal Menginap</span>
        <p className="font-medium">
          {formatDate(dateFrom)} - {formatDate(dateTo)}
        </p>
      </div>

      <div className="hidden md:block h-12 w-[1px] bg-gray-200" />
      <hr className="w-full border-gray-200 md:hidden" />

      <div className="flex flex-col w-full md:w-auto">
        <span className="text-sm text-gray-600">Jumlah Tamu dan Kamar</span>
        <p className="font-medium">{guests} Tamu {rooms} Kamar</p>
      </div>

      <div className="hidden md:block h-12 w-[1px] bg-gray-200" />

      <button
        onClick={() => router.push("/")}
        className="w-full md:w-auto bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md text-center"
      >
        Ubah Pencarian
      </button>
    </div>
  );

  return (
    <>
      <div className="lg:hidden">
        <Accordion title="Detail Pencarian" defaultOpen={true}>
          <SearchContent />
        </Accordion>
      </div>
      <div className="hidden lg:block p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <SearchContent />
      </div>
    </>
  );
};
