import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export function GithubUser({ username }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((json) => setUser(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [username]);

    return (
        <div>
            {user && (
                <>
                    <img src={user.avatar_url} />
                    <div>{user.login}</div>
                    <div>{user.name}</div>
                </>
            )}
            {error && <div>{error.message}</div>}
            {loading && <div>Loading...</div>}
        </div>
    );
}