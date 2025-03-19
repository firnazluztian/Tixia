import dynamic from 'next/dynamic';
const HomeContainer = dynamic(() => import('@/app/containers/home').then(mod => mod.HomeContainer), { ssr: true });

export default function Home() {
  return <HomeContainer />
}
