import dynamic from "next/dynamic"

const HomeContainer = dynamic(() => import('@/app/containers/home').then(mod => mod.HomeContainer), { ssr: true })

const Page = () => <HomeContainer />

export default Page
