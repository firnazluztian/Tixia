import dynamic from "next/dynamic";
import { Suspense } from 'react'
import SearchLoading from './loading'

const HotelSearchContainer = dynamic(() => import("@/app/containers/hotel-search").then(mod => mod.HotelSearchContainer), {
  ssr: true,
});

const SearchContent = () => {
  return <HotelSearchContainer />
}

const HotelSearchPage = () => {
  return (
    <div>
      <Suspense fallback={<SearchLoading />}>
        <SearchContent />
      </Suspense>
    </div>
  )
}

export default HotelSearchPage
