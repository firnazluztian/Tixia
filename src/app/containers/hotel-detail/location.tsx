"use client";

import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

interface LocationProps {
  data: {
    latitude: number;
    longitude: number;
  };
}

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.75rem'
};

export const Location = ({ data }: LocationProps) => {
  const center = {
    lat: data.latitude,
    lng: data.longitude
  };

  return (
    <div id="location">
      <p className="text-lg font-bold mb-2">Lokasi Hotel</p>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
