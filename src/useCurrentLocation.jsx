import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setLoading(false);
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return { location, getCurrentLocation, error, loading };
};

export default useCurrentLocation;
