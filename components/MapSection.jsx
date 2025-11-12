import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function MapSection() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = {
    lat: -6.277113182630325,
    lng: 106.97375391833343,
  };

  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={16}
          options={{
            mapTypeControl: true,
            streetViewControl: true,
            zoomControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div className="flex items-center justify-center h-full">Loading Map...</div>
      )}
    </div>
  );
}
