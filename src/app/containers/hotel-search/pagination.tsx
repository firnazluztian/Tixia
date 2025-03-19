interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }: PaginationProps) => {
  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="flex flex-wrap items-center gap-1 mt-4 justify-center md:justify-end">
      <p className="text-gray-500 text-sm md:text-base">Halaman</p>
      <div className="flex items-center gap-1">
        <button 
          className="p-2 md:px-4 md:py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange?.(page)}
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full text-xs md:text-sm ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : page === '...'
                ? "text-gray-500"
                : "text-gray-500 hover:bg-gray-100"
            } ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}
          >
            {page}
          </button>
        ))}
        
        <button 
          className="p-2 md:px-4 md:py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
