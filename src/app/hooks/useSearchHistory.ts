"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface SearchParams {
  city: string;
  country: string;
  dateFrom: string;
  dateTo: string;
  guests: string;
  rooms: string;
}

export const useSearchHistory = () => {
  const router = useRouter();

  const saveSearchHistory = useCallback((params: SearchParams) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastSearch', JSON.stringify(params));
    }
  }, []);

  const getLastSearch = useCallback(() => {
    if (typeof window !== 'undefined') {
      const lastSearch = localStorage.getItem('lastSearch');
      return lastSearch ? JSON.parse(lastSearch) : null;
    }
    return null;
  }, []);

  const goToLastSearch = useCallback(() => {
    const lastSearch = getLastSearch();
    if (lastSearch) {
      const params = new URLSearchParams(lastSearch);
      router.push(`/hotel/search?${params.toString()}`);
    }
  }, [router, getLastSearch]);

  return {
    saveSearchHistory,
    getLastSearch,
    goToLastSearch
  };
}; 