// useGithubUser.js
import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    return { user, error, loading };
};

export default useGithubUser;
