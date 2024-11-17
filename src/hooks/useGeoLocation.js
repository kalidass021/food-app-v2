import { useEffect, useState } from 'react';

const useGeoLocation = () => {
  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationData({ latitude, longitude });
        },
        (err) => {
          console.error('Error while getting geolocation:', err);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return { ...locationData };
};

export default useGeoLocation;
