import dynamic from "next/dynamic"

const HomeContainer = dynamic(
  () => import('@/app/containers/home').then(mod => mod.HomeContainer),
  { ssr: true }
);

async function getCities() {
  try {
    const res = await fetch('https://ota-gin.onrender.com/api/v1/cities/', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch cities');
    }
    
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}

export default async function HomePage() {
  const cities = await getCities();  
  return <HomeContainer cities={cities} />;
}
